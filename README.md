# Tempo de Mudança

Calculadora do tempo (e do custo) de uma mudança residencial: você informa os
móveis, as caixas, o acesso nos dois endereços, a distância, o veículo e a
equipe, e ela mostra a duração total e o tempo de cada fase.

- `index.html`: a página (abra direto no navegador, sem instalar nada).
- `estimativa.js`: o motor de cálculo. Roda no navegador e no Node, para que um
  futuro agente (WhatsApp, site, CRM) use exatamente as mesmas regras.

## Como o tempo é calculado

| Fase | Regra |
| --- | --- |
| Volume | soma do volume de cada móvel + caixas de 0,06 m³ |
| Viagens | volume ÷ (capacidade do baú × 85%), arredondado para cima |
| Carregamento | volume ÷ ritmo da equipe × fator de acesso da origem |
| Descarregamento | igual ao carregamento × 0,85, com o acesso do destino |
| Ritmo da equipe | 3 m³/h por pessoa × pessoas^0,85 (cada pessoa a mais rende menos) |
| Fator de acesso | escada: +15% por andar; elevador: +4% por andar (máx. +40%); +10% a cada 10 m entre o caminhão e a porta |
| Desmontagem e montagem | minutos de cada móvel ÷ equipe |
| Embalagem (opcional) | 8 caixas por pessoa-hora |
| Deslocamento | 25 km/h na cidade, 60 km/h acima de 50 km, ×1,4 no pico; ida e volta para cada viagem extra |
| Proteção e manobras | 30 min + 15 min por parada |
| Almoço | +1 h quando o trabalho passa de 6 h |

O resultado vem com margem de ±15%. Todos os parâmetros ficam em `PARAMS`,
`ITENS` e `VEICULOS` dentro de `estimativa.js`. Ajuste-os com os tempos reais
das suas mudanças para a estimativa ficar mais precisa.

## Uso no Node

```js
const { estimar, custo } = require('./estimativa.js');
const r = estimar({
  itens: { cama_casal: 1, geladeira: 1, sofa_3: 1 },
  caixas: 20,
  montagem: true,
  origem: { andar: 2, elevador: false, distanciaPorta: 15 },
  destino: { andar: 0, elevador: false, distanciaPorta: 5 },
  distanciaKm: 8,
  veiculo: 'bau_pequeno',
  equipe: 3,
});
console.log(r.total, r.fases, r.alertas);
```
