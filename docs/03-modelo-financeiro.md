# Etapa 3 — Modelo financeiro (resumo)

Planilha editável: `model/Seckler_Modelo_Financeiro.xlsx` (gerada por `model/build_model.py`). Resultados abaixo com as premissas padrão, validados por recálculo no LibreOffice. **Valores mensais em regime, em US$.** O custo fixo base (US$3.500) e o volume de mudanças são **placeholders** até você fornecer os números reais.

## Resultado por cenário

| | A Conserv. | A Base | A Otim. | B Conserv. | B Base | B Otim. | C Conserv. | C Base | C Otim. |
|---|---|---|---|---|---|---|---|---|---|
| Receita total | 7.520 | 21.650 | 48.600 | 7.520 | 21.650 | 48.600 | 11.020 | 25.150 | 52.100 |
| Margem de contribuição | 3.016 | 9.730 | 24.303 | 3.496 | 11.230 | 27.303 | 6.996 | 14.730 | 30.803 |
| MC % | 40% | 45% | 50% | 46% | 52% | 56% | 63% | 59% | 59% |
| Custo fixo | 3.500 | 3.500 | 3.500 | 11.275 | 11.275 | 11.275 | 22.317 | 22.317 | 22.317 |
| **Resultado de caixa/mês** | **−484** | **6.230** | **20.803** | **−7.779** | **−45** | **16.028** | **−15.321** | **−7.587** | **8.486** |
| Ponto de equilíbrio (receita/mês) | 8.727 | 7.788 | 6.999 | 24.253 | 21.737 | 20.070 | 35.153 | 38.104 | 37.746 |
| Investimento inicial | 4.000 | 4.000 | 4.000 | 70.875 | 70.875 | 70.875 | 331.000 | 331.000 | 331.000 |
| Capital de giro | 10.500 | 14.000 | 27.250 | 33.825 | 29.550 | 42.800 | 66.950 | 51.634 | 64.884 |
| **Caixa total necessário** | **14.500** | **18.000** | **31.250** | **104.700** | **100.425** | **113.675** | **397.950** | **382.634** | **395.884** |

Premissas principais: B = 3.000 sf a US$17,50 + US$4 de CAM, capacidade de 100 vaults. C = 6.000 sf a US$300/sf (US$1,8 mi), SBA 504 50/40/10, banco a 7,25%, CDC a 6,5%, 25 anos, sublocação de ~2.500 sf por US$3.500/mês. Detalhes e fontes na aba **Premissas**.

## Ponto de decisão: quando sair do modelo terceirizado (aba Sensibilidade)

| Custo do parceiro por vault/mês | Vaults estáveis para B empatar com A | Capacidade B | Vaults para C empatar com A | Capacidade C |
|---|---|---|---|---|
| US$40 | 195 | 100 | 383 | 200 |
| US$60 | 130 | 100 | 256 | 200 |
| US$80 | 98 | 100 | 192 | 200 |
| US$100 | 78 | 100 | 154 | 200 |

**Leitura:**
1. **Comece pelo A.** Ele exige ~US$15–31 mil de caixa, contra ~US$100 mil do B e ~US$380–400 mil do C, e é o único cenário positivo no caso base.
2. **Alugar (B) só se paga pela armazenagem** se o parceiro cobrar US$80 ou mais por vault **e** houver cerca de 100 vaults ocupados de forma estável, ou seja, o galpão cheio. Abaixo disso, o B só se justifica por motivos estratégicos: um contrato de restauradora ou governo que exija instalação própria, ou a necessidade de área de triagem e limpeza para pack-out.
3. **Comprar (C) não fecha nos casos conservador e base.** A entrada de 10% + fechamento (~US$252 mil) e a parcela de ~US$11,4 mil/mês exigem o caso otimista *e* sublocação. Revisitar só quando B estiver acima de 80% de ocupação por 6 meses.
4. **Gatilhos objetivos para avançar A → B:** (a) ≥ 70 vaults ocupados por 3 meses seguidos; (b) cotação real do parceiro ≥ US$75/vault; (c) ≥ 2 restauradoras com contrato/MSA ativo; (d) caixa disponível ≥ US$110 mil sem usar a reserva operacional.

## Limitações

* O modelo é estático (mês em regime), sem rampa de ocupação. No B e no C, os primeiros 6–12 meses terão ocupação menor e prejuízo maior que o mostrado.
* Não inclui imposto de renda, depreciação nem amortização de principal como formação de patrimônio (no C, parte da parcela é poupança forçada).
* Preço por vault, custo do parceiro e ticket de pack-out são as premissas mais sensíveis e **as menos verificadas**. Prioridade da semana 1: obter 3 cotações de cada.
