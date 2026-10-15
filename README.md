# Seckler Moving — Expansão: Warehouse, Storage, Sinistros e Governo

Plano de estratégia e execução para transformar a Seckler Moving (Winter Garden, FL) numa operação integrada de mudança, armazenagem e pack-out de sinistros. Atualizado em 15/10/2026.

## Conclusões principais

1. **Comece terceirizando a armazenagem (cenário A).** Exige ~US$15–31 mil de caixa e é o único cenário com resultado positivo no caso base (+US$6,2 mil/mês com premissas preliminares). Alugar um galpão (B) exige ~US$100 mil e fica no zero a zero no caso base. Comprar (C) exige ~US$380–400 mil e dá prejuízo nos casos conservador e base.
2. **Gatilho objetivo para alugar:** ≥ 70 vaults ocupados por 3 meses, parceiro cobrando ≥ US$75/vault, 2 restauradoras com contrato e US$110 mil em caixa. Ver `docs/03`.
3. **Galpão pequeno é escasso:** espaços abaixo de 20.000 sf têm disponibilidade < 4% em Orlando. Em Winter Garden e Ocoee, os anúncios pedem US$16,50–19,20/sf/ano + NNN.
4. **Sinistros:** entrar como **subcontratada de restauradoras**, não contratada do segurado, por causa da proibição de AOB desde 2023. Prospects reais listados.
5. **Governo:** registrar no SAM.gov e no MyFloridaMarketPlace (gratuito), mas **não** perseguir DoD/DP3 nem GSA agora. O GHC foi rescindido e ser TSP exige autoridade HHG e CMMC. O caminho realista é subcontratação local e compras municipais pequenas.
6. **Alerta de crédito:** fontes indicam que o SBA SOP 50 10 8.1 (desde 01/10/2026) restringe 7(a)/504 a cidadãos ou nacionais dos EUA. Confirmar antes de planejar B ou C com SBA.
7. **Alerta de conformidade:** o registro FMCSA público mostra o último MCS-150 há ~2 anos. Verificar antes de qualquer prospecção.

## Índice

| Etapa | Arquivo |
|---|---|
| 1. Auditoria de skills e arquitetura | [docs/01-auditoria-skills.md](docs/01-auditoria-skills.md) |
| 2. Pesquisa de mercado (fontes, datas, confiança) | [docs/02-pesquisa-mercado.md](docs/02-pesquisa-mercado.md) |
| 3. Modelo financeiro (resumo) | [docs/03-modelo-financeiro.md](docs/03-modelo-financeiro.md) |
| 3. Modelo editável (Premissas, Cenários, Sensibilidade, CRM, KPIs) | [model/Seckler_Modelo_Financeiro.xlsx](model/Seckler_Modelo_Financeiro.xlsx) — regenerar com `python3 model/build_model.py` |
| 4. Pipelines A/B/C | [docs/05-pipelines.md](docs/05-pipelines.md) |
| 4. Prospects verificáveis | [data/prospects.csv](data/prospects.csv) |
| 5. Financiamento | [docs/04-financiamento.md](docs/04-financiamento.md) |
| 6. Scripts e propostas (rascunhos, **não enviados**) | [docs/06-scripts-e-propostas.md](docs/06-scripts-e-propostas.md) |
| 6. Plano 30/60/90 e riscos | [docs/07-plano-30-60-90.md](docs/07-plano-30-60-90.md) |
| 6. Checklists (financiamento, contratos públicos, vendor packet) | [docs/08-checklists.md](docs/08-checklists.md) |

## Pendências: informações indispensáveis que só você tem

| # | Pergunta | Afeta |
|---|---|---|
| P1 | Status atual: USDOT/MCS-150 em dia? Registro FDACS ativo? Tem autoridade interestadual (MC)? | Tudo |
| P2 | Receita e nº de mudanças por mês nos últimos 12 meses; ticket médio; custos fixos mensais reais | Modelo (substitui placeholders) |
| P3 | Frota e equipe atuais (caminhões, tamanho, funcionários, terceirizados) | Capacidade, workers' comp |
| P4 | Caixa disponível para investir sem comprometer a operação | Escolha A/B/C |
| P5 | Estrutura societária e **cidadania/residência dos sócios com ≥ 20%** | SBA 7(a)/504 |
| P6 | Seguros vigentes (tipos e limites) | Pipeline B, governo |
| P7 | Certificações possíveis: veterano, mulher proprietária, minoria; endereço em HUBZone? | Set-asides |
| P8 | Já existe UEI/SAM.gov? | Pipeline C |

Enquanto essas respostas não chegam, o modelo usa premissas marcadas como **PREMISSA** ou **PENDENTE**.

## Regras de execução

Nenhuma mensagem enviada, contrato assinado, crédito solicitado, compromisso financeiro assumido ou proposta submetida sem **aprovação explícita** de Renan. Leads e propostas nunca entram no modelo como receita.
