// Motor de cálculo do tempo de mudança.
// Funciona no navegador (window.Mudanca) e no Node (require('./estimativa.js')),
// para que a página e um futuro agente usem exatamente as mesmas regras.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Mudanca = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // volume em m³; desmontar/montar em minutos de uma pessoa
  const ITENS = [
    { id: 'cama_casal', nome: 'Cama de casal', volume: 1.5, desmontar: 20, montar: 25 },
    { id: 'cama_solteiro', nome: 'Cama de solteiro', volume: 0.8, desmontar: 10, montar: 15 },
    { id: 'beliche', nome: 'Beliche', volume: 1.2, desmontar: 25, montar: 30 },
    { id: 'guarda_roupa_3p', nome: 'Guarda-roupa 3 portas', volume: 2.0, desmontar: 40, montar: 50 },
    { id: 'guarda_roupa_6p', nome: 'Guarda-roupa 6 portas', volume: 3.0, desmontar: 60, montar: 75 },
    { id: 'comoda', nome: 'Cômoda', volume: 0.6, desmontar: 0, montar: 0 },
    { id: 'sofa_3', nome: 'Sofá 3 lugares', volume: 1.8, desmontar: 0, montar: 0 },
    { id: 'sofa_retratil', nome: 'Sofá retrátil / canto', volume: 2.5, desmontar: 15, montar: 15 },
    { id: 'rack', nome: 'Rack / estante', volume: 0.8, desmontar: 15, montar: 20 },
    { id: 'tv', nome: 'TV', volume: 0.2, desmontar: 5, montar: 10 },
    { id: 'mesa_jantar', nome: 'Mesa de jantar + 4 cadeiras', volume: 1.5, desmontar: 10, montar: 10 },
    { id: 'geladeira', nome: 'Geladeira', volume: 1.0, desmontar: 0, montar: 0 },
    { id: 'fogao', nome: 'Fogão', volume: 0.4, desmontar: 5, montar: 10 },
    { id: 'maquina_lavar', nome: 'Máquina de lavar', volume: 0.5, desmontar: 10, montar: 15 },
    { id: 'micro_ondas', nome: 'Micro-ondas', volume: 0.1, desmontar: 0, montar: 0 },
    { id: 'escrivaninha', nome: 'Escrivaninha', volume: 0.6, desmontar: 15, montar: 20 },
    { id: 'armario_cozinha', nome: 'Armário de cozinha (módulo)', volume: 0.7, desmontar: 20, montar: 30 },
  ];

  const VOLUME_CAIXA = 0.06; // caixa padrão de mudança, 50 × 40 × 30 cm

  // capacidade do baú em m³
  const VEICULOS = [
    { id: 'utilitario', nome: 'Utilitário (Fiorino)', capacidade: 3 },
    { id: 'bau_pequeno', nome: 'Baú pequeno (HR / Bongo)', capacidade: 12 },
    { id: 'vuc', nome: 'VUC', capacidade: 20 },
    { id: 'tres_quartos', nome: 'Caminhão 3/4', capacidade: 28 },
    { id: 'toco', nome: 'Caminhão toco', capacidade: 40 },
  ];

  const PARAMS = {
    m3PorPessoaHora: 3, // carregamento em nível, sem escada
    expoenteEquipe: 0.85, // cada pessoa a mais rende um pouco menos
    fatorDescarga: 0.85, // descarregar é mais rápido que carregar
    caixasPorPessoaHora: 8, // embalagem feita pela equipe
    aproveitamentoBau: 0.85,
    protecaoMin: 30, // cobertores, plástico bolha, proteção de piso
    manobraMinPorParada: 15, // estacionar, abrir baú, liberar portaria
    velocidadeUrbana: 25,
    velocidadeEstrada: 60,
    limiteUrbanoKm: 50,
    fatorPico: 1.4,
    almocoAPartirDeH: 6,
    jornadaH: 10,
    margem: 0.15,
  };

  function fatorAcesso(acesso) {
    const a = acesso || {};
    const andar = Math.max(0, Number(a.andar) || 0);
    let f = a.elevador ? 1 + Math.min(0.04 * andar, 0.4) : 1 + 0.15 * andar;
    f += 0.01 * Math.max(0, (Number(a.distanciaPorta) || 0) - 10); // +10% a cada 10 m de caminhada
    return f;
  }

  function volumeDosItens(itens) {
    let v = 0;
    for (const item of ITENS) v += (Number(itens && itens[item.id]) || 0) * item.volume;
    return v;
  }

  function minutosDeMontagem(itens, campo) {
    let m = 0;
    for (const item of ITENS) m += (Number(itens && itens[item.id]) || 0) * item[campo];
    return m;
  }

  function veiculoPorId(id) {
    return VEICULOS.find((v) => v.id === id) || VEICULOS[3];
  }

  function estimar(entrada) {
    const e = entrada || {};
    const p = PARAMS;
    const equipe = Math.max(1, Math.round(Number(e.equipe) || 1));
    const caixas = Math.max(0, Number(e.caixas) || 0);
    const veiculo = veiculoPorId(e.veiculo);
    const distanciaKm = Math.max(0, Number(e.distanciaKm) || 0);

    const volumeItens = volumeDosItens(e.itens);
    const volumeCaixas = caixas * VOLUME_CAIXA;
    const volume = volumeItens + volumeCaixas;
    const capacidadeUtil = veiculo.capacidade * p.aproveitamentoBau;
    const viagens = Math.max(1, Math.ceil(volume / capacidadeUtil));

    const ritmo = p.m3PorPessoaHora * Math.pow(equipe, p.expoenteEquipe); // m³/h da equipe
    const velocidade = distanciaKm > p.limiteUrbanoKm ? p.velocidadeEstrada : p.velocidadeUrbana;
    const trechoH = (distanciaKm / velocidade) * (e.pico ? p.fatorPico : 1);

    const fases = [
      { id: 'embalagem', nome: 'Embalagem', horas: e.embalagem ? caixas / (p.caixasPorPessoaHora * equipe) : 0 },
      { id: 'preparo', nome: 'Proteção e manobras', horas: p.protecaoMin / 60 + (2 * viagens * p.manobraMinPorParada) / 60 },
      { id: 'desmontagem', nome: 'Desmontagem', horas: e.montagem ? minutosDeMontagem(e.itens, 'desmontar') / 60 / equipe : 0 },
      { id: 'carga', nome: 'Carregamento', horas: (volume / ritmo) * fatorAcesso(e.origem) },
      { id: 'deslocamento', nome: 'Deslocamento', horas: trechoH * (2 * viagens - 1) },
      { id: 'descarga', nome: 'Descarregamento', horas: (volume / ritmo) * p.fatorDescarga * fatorAcesso(e.destino) },
      { id: 'montagem', nome: 'Montagem', horas: e.montagem ? minutosDeMontagem(e.itens, 'montar') / 60 / equipe : 0 },
    ];
    const trabalho = fases.reduce((s, f) => s + f.horas, 0);
    fases.push({ id: 'almoco', nome: 'Pausa para almoço', horas: trabalho > p.almocoAPartirDeH ? 1 : 0 });
    const total = fases.reduce((s, f) => s + f.horas, 0);

    const alertas = [];
    if (total > p.jornadaH) {
      alertas.push(`Passa de uma jornada de ${p.jornadaH} h. Aumente a equipe ou divida a mudança em dois dias.`);
    }
    if (viagens > 1) {
      const maior = VEICULOS.find((v) => v.capacidade * p.aproveitamentoBau >= volume);
      alertas.push(
        maior
          ? `São ${viagens} viagens com ${veiculo.nome}. Com ${maior.nome} seria uma viagem só.`
          : `São ${viagens} viagens mesmo com o maior veículo. Considere dois veículos ao mesmo tempo.`
      );
    }
    for (const [lado, a] of [['origem', e.origem], ['destino', e.destino]]) {
      if (a && !a.elevador && Number(a.andar) >= 4) {
        alertas.push(`Escada a partir do 4º andar na ${lado}: confira se os móveis grandes passam ou se precisa de içamento.`);
      }
    }

    return {
      volume, volumeItens, volumeCaixas, viagens, capacidadeUtil, veiculo, equipe, fases, total,
      minimo: total * (1 - p.margem),
      maximo: total * (1 + p.margem),
      alertas,
    };
  }

  // tarifas: { porPessoaHora, veiculoHora, porKm }
  function custo(resultado, entrada, tarifas) {
    const t = tarifas || {};
    const km = (Number(entrada.distanciaKm) || 0) * (2 * resultado.viagens - 1);
    const maoDeObra = resultado.equipe * resultado.total * (Number(t.porPessoaHora) || 0);
    const veiculo = resultado.total * (Number(t.veiculoHora) || 0);
    const rodagem = km * (Number(t.porKm) || 0);
    return { maoDeObra, veiculo, rodagem, total: maoDeObra + veiculo + rodagem };
  }

  function compararEquipes(entrada, de, ate) {
    const linhas = [];
    for (let n = de || 2; n <= (ate || 6); n++) {
      const r = estimar(Object.assign({}, entrada, { equipe: n }));
      linhas.push({ equipe: n, total: r.total, pessoaHoras: n * r.total });
    }
    return linhas;
  }

  return { ITENS, VEICULOS, VOLUME_CAIXA, PARAMS, fatorAcesso, estimar, custo, compararEquipes };
});
