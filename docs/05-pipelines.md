# Etapa 4 — Três pipelines comerciais

Prospects reais (com fonte) em `data/prospects.csv`, também na aba **CRM** da planilha. Prioridade: 1 = alto retorno × baixo esforço × boa evidência.

## Etapas do CRM (iguais para os três pipelines)

| Etapa | Critério de saída (objetivo) |
|---|---|
| 0-Identificado | Empresa existe e tem fonte verificável |
| 1-Pesquisado | Sabemos quem decide, que serviço compra e se terceiriza |
| 2-Aprovado p/ contato | **Você aprovou** o contato e a mensagem |
| 3-Contatado | Mensagem enviada ou ligação feita (data registrada) |
| 4-Reunião | Reunião realizada |
| 5-Proposta/Orçamento | Documento enviado **com sua aprovação** |
| 6-Ganho | Primeiro job pago ou contrato assinado por você |
| 7-Perdido / 8-Em espera | Motivo registrado |

Regra de follow-up: 7 dias após o último contato (calculado automaticamente) e no máximo 4 tentativas antes de mover para "Em espera".

---

## Pipeline A — Corretores imobiliários

**Proposta de valor:** o corretor quer que o fechamento não atrase. A Seckler oferece (1) mudança com data garantida para o dia do closing; (2) **armazenagem-ponte** quando a casa nova atrasa ("bridge storage", primeiro mês com desconto para clientes indicados); (3) retirada de móveis para *staging* e limpeza antes da listagem.

**Sistema:**
1. Montar lista nominal de 40 agentes ativos em Winter Garden, Ocoee e Horizon West a partir de Zillow, Homes.com e MLS (top por volume em 12 meses). Usar só dados públicos, sem inventar nomes.
2. Pedir 10 minutos na reunião semanal das equipes KW Realty at the Parks e KW Advantage III.
3. Avaliar a afiliação à ORRA (custo a confirmar) somente depois de 3 indicações orgânicas.
4. Material: one-pager + cartão "Closing-day guarantee" + link de agendamento.

**Métricas:** contatos/semana → reuniões → indicações → orçamentos → mudanças fechadas. Meta base: 15 contatos e 2 indicações por semana.

**Cuidado legal:** a Flórida e o RESPA (federal) restringem pagamentos por indicação ligados a transações imobiliárias com financiamento federal. **Não oferecer comissão em dinheiro a corretores** sem orientação jurídica. Prefira valor ao cliente final (desconto ao cliente indicado).

---

## Pipeline B — Sinistros (restauradoras e mitigação)

**Oferta "Contents Pack-out Partner":** atendimento em até 4 horas (dentro de 30 milhas de Winter Garden), embalagem por cômodo, **inventário digital com foto e código de barras por caixa**, separação em 3 categorias (recuperável / a limpar / perda total, sempre com aprovação do ajustador), transporte, armazenagem em vault lacrado, relatório para o ajustador, e pack-back com reposicionamento por cômodo.

**Modelo de contratação recomendado:** **subcontratada da restauradora** (MSA + ordens de serviço), faturando para a empresa em net 30. Por causa da proibição de AOB (apólices a partir de 2023), contratar diretamente com o segurado transfere o risco de pagamento a menor para a Seckler.

**O que investigar antes de oferecer (bloqueadores):**

| Tema | Pergunta | Onde verificar |
|---|---|---|
| Seguro | Limites exigidos pelas restauradoras e TPAs (normalmente GL, auto, workers' comp, carga em trânsito, **warehouse legal liability**, umbrella). Valores não confirmados publicamente. | Pedir o *vendor packet* de cada prospect; cotar com corretor de seguros comercial |
| Workers' comp | Obrigatório com 4+ funcionários na Flórida. Restauradoras costumam exigir de qualquer forma. | FL DFS |
| Documentação | W-9, COI com a restauradora como *additional insured*, registro FDACS, USDOT, BTR, contrato de armazenagem com cláusula de responsabilidade e penhor revisada por advogado | Advogado + corretor de seguros |
| Cobrança | Restauradoras faturam em Xactimate com tabela regional. A Seckler pode cobrar tabela própria ou linhas de Xactimate. Prazo de pagamento esperado de 30 a 75 dias (premissa). | Perguntar no 1º contato; o modelo usa DSO de 60 dias |
| Emergência | Plano de escala: equipe de plantão, caixas em estoque para 3 casas, caminhão disponível, protocolo para itens molhados/mofados (não armazenar sem secagem e autorização) e para itens de alto valor e documentos | SOP interno (rascunho em `docs/06`) |
| Programas de TPA | Contractor Connection, Sedgwick, Alacrity, Code Blue: requisitos de cadastro não publicados | Portais dos TPAs (depois de ter 3 restauradoras de referência) |

**Métricas:** restauradoras contatadas → visitas → vendor packet aprovado → 1º job → jobs/mês → DSO real.

---

## Pipeline C — Governo

| Nível | O que é | Elegibilidade da Seckler hoje | Ação recomendada |
|---|---|---|---|
| **Federal (direto)** | Compras no SAM.gov sob 484210/493110/484220; DoD (Tender of Service); GSA MAS 541614OR | SAM.gov: sim (gratuito). DoD TSP: **não** (exige autoridade HHG, CMMC L1 etc.). GSA MAS: tecnicamente possível, mas o esforço é desproporcional | Registrar no SAM.gov; criar buscas salvas por NAICS com local de execução na FL; **não** perseguir DP3 nem GSA por enquanto |
| **Federal (subcontratação)** | Primes como Suddath e outros grandes movers com contratos de realocação | Possível como agente local | Sondar Suddath e outros primes; cadastrar no SBA SubNet |
| **Estadual** | MyFloridaMarketPlace; agências compram mudança por cotação | Possível após cadastro no MFMP + W-9 no DFS | Cadastrar; alertas para "moving/relocation/storage" |
| **Municipal / escolar** | OrangeBids (Orange County), Cidade de Orlando, Winter Garden, OCPS, UCF | Possível | Cadastrar nos portais; em compras pequenas (abaixo do limite de licitação), oferecer cotação direta a gerentes de facilities |
| **Privado ligado a sinistros** | FEMA não contrata mudanças de particulares; após desastres, a demanda vem de seguradoras, restauradoras e proprietários | — | Tratado no Pipeline B, **não** é contrato público |

**Regra:** cada oportunidade passa pela checklist de `docs/08` (requisitos, bonding, seguro, prazo, local, set-aside) antes de qualquer recomendação de proposta. Nenhuma proposta é submetida sem sua aprovação.
