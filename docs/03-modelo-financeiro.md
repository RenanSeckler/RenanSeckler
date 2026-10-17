# Etapa 3 — Modelo financeiro (resumo)

Planilha editável: `model/Seckler_Modelo_Financeiro.xlsx` (gerada por `model/build_model.py`). Resultados abaixo com as premissas padrão, validados por recálculo no LibreOffice. **Valores mensais em regime, em US$.** O custo fixo base (US$3.500) e o % de custo variável ainda são **placeholders**; volume e ticket já vêm dos dados informados.

## Resultado por cenário

Atualizado em 17/10/2026 com dados informados por Renan: **~30 mudanças/mês, ticket médio de ~US$1.000 (mínimo de US$450), 2 caminhões**. Conservador = 24 mudanças a US$900; otimista = 36 a US$1.100. **Custos fixos e % de custo variável ainda são placeholders**, e são eles que mais mudam o resultado.

| | A Conserv. | A Base | A Otim. | B Conserv. | B Base | B Otim. | C Conserv. | C Base | C Otim. |
|---|---|---|---|---|---|---|---|---|---|
| Receita total | 22.320 | 36.250 | 59.600 | 22.320 | 36.250 | 59.600 | 25.820 | 39.750 | 63.100 |
| Margem de contribuição | 9.232 | 16.300 | 29.583 | 9.712 | 17.800 | 32.583 | 13.212 | 21.300 | 36.083 |
| MC % | 41% | 45% | 50% | 44% | 49% | 55% | 51% | 54% | 57% |
| Custo fixo | 3.500 | 3.500 | 3.500 | 11.275 | 11.275 | 11.275 | 22.317 | 22.317 | 22.317 |
| **Resultado de caixa/mês** | **5.732** | **12.800** | **26.083** | **−1.563** | **6.525** | **21.308** | **−9.105** | **−1.017** | **13.766** |
| Ponto de equilíbrio (receita/mês) | 8.462 | 7.784 | 7.051 | 25.912 | 22.962 | 20.624 | 43.613 | 41.647 | 39.026 |
| Investimento inicial | 4.000 | 4.000 | 4.000 | 70.875 | 70.875 | 70.875 | 331.000 | 331.000 | 331.000 |
| Capital de giro | 10.500 | 14.000 | 27.250 | 33.825 | 29.550 | 42.800 | 66.950 | 51.634 | 64.884 |
| **Caixa total necessário** | **14.500** | **18.000** | **31.250** | **104.700** | **100.425** | **113.675** | **397.950** | **382.634** | **395.884** |

⚠️ Com 2 caminhões e 30 mudanças/mês, o custo fixo real (parcelas e seguro dos caminhões, telefone, marketing, contador etc.) provavelmente passa bem de US$3.500. A cada US$1.000 a mais de custo fixo, o resultado mensal de **todos** os cenários cai US$1.000. A conclusão relativa (A antes de B, C só muito depois) **não muda**, porque a diferença entre os cenários está nos custos do armazém, não na mudança.

Premissas principais: B = 3.000 sf a US$17,50 + US$4 de CAM, capacidade de 100 vaults. C = 6.000 sf a US$300/sf (US$1,8 mi), SBA 504 50/40/10, banco a 7,25%, CDC a 6,5%, 25 anos, sublocação de ~2.500 sf por US$3.500/mês. Detalhes e fontes na aba **Premissas**.

## Ponto de decisão: quando sair do modelo terceirizado (aba Sensibilidade)

| Custo do parceiro por vault/mês | Vaults estáveis para B empatar com A | Capacidade B | Vaults para C empatar com A | Capacidade C |
|---|---|---|---|---|
| US$40 | 195 | 100 | 383 | 200 |
| US$60 | 130 | 100 | 256 | 200 |
| US$80 | 98 | 100 | 192 | 200 |
| US$100 | 78 | 100 | 154 | 200 |

**Leitura:**
1. **Comece pelo A.** Ele exige ~US$15–31 mil de caixa, contra ~US$100 mil do B e ~US$380–400 mil do C, e tem o melhor resultado mensal em todos os casos. Rende ~US$6 mil/mês a mais que o B no caso base.
2. **Alugar (B) só se paga pela armazenagem** se o parceiro cobrar US$80 ou mais por vault **e** houver cerca de 100 vaults ocupados de forma estável, ou seja, o galpão cheio. Abaixo disso, o B só se justifica por motivos estratégicos: um contrato de restauradora ou governo que exija instalação própria, ou a necessidade de área de triagem e limpeza para pack-out.
3. **Comprar (C) não fecha nos casos conservador e base.** A entrada de 10% + fechamento (~US$252 mil) e a parcela de ~US$11,4 mil/mês exigem o caso otimista *e* sublocação. Revisitar só quando B estiver acima de 80% de ocupação por 6 meses.
4. **Gatilhos objetivos para avançar A → B:** (a) ≥ 70 vaults ocupados por 3 meses seguidos; (b) cotação real do parceiro ≥ US$75/vault; (c) ≥ 2 restauradoras com contrato/MSA ativo; (d) caixa disponível ≥ US$110 mil sem usar a reserva operacional.

## Limitações

* O modelo é estático (mês em regime), sem rampa de ocupação. No B e no C, os primeiros 6–12 meses terão ocupação menor e prejuízo maior que o mostrado.
* Não inclui imposto de renda, depreciação nem amortização de principal como formação de patrimônio (no C, parte da parcela é poupança forçada).
* Preço por vault, custo do parceiro e ticket de pack-out são as premissas mais sensíveis e **as menos verificadas**. Prioridade da semana 1: obter 3 cotações de cada.
