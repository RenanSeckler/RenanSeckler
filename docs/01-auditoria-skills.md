# Etapa 1 — Auditoria das skills e arquitetura recomendada

Data da auditoria: 15/10/2026. Os repositórios foram clonados (depth 1) num diretório temporário. **Nada foi instalado** neste repositório nem em `~/.claude`.

## 1. O que existe em cada repositório

| Repositório | Último commit | Licença | Conteúdo real | Instalação | Dependências |
|---|---|---|---|---|---|
| `peterbamuhigire/business-plan-skills` | 29/09/2026 | **MIT** | 137 skills (plano de negócios, bankability, stress test, valuation, M&A, SaaS). Orquestrador próprio e contexto de país **apenas para Uganda, Quênia e Tanzânia** (Uganda é o padrão). Nenhuma referência a SBA ou ao mercado dos EUA. | Plugin (`/plugin marketplace add …`) ou `install.sh` (Node ≥ 18) | Node 18+, Python 3.11+, `PyYAML`, `xlsxwriter`. O plugin instala um hook `PreToolUse` (bloqueio de comandos Bash destrutivos). |
| `cre-ai-skills/CRE-AI-Skills` | 25/08/2026 | **Sem arquivo LICENSE** (só aviso de "uso educacional") | 17 skills de due diligence de imóveis comerciais: PSA, título/survey, Phase I ESA, submercado, underwriting e financiamento. **Foco em aquisição multifamiliar/mista**; o lender-sourcing trata de Agency/CMBS/bancos, não de SBA 504. | Copiar a pasta da skill para `.claude/skills/` | Nenhuma |
| `1102tools-dev/federal-contracting-skills` | — | — | **Inacessível.** GitHub retorna 404 e o acesso pela sessão foi negado. Uma página de tópico do GitHub descreve um repositório com esse nome (cálculo de custo, SOW, APIs USAspending/CALC+/BLS), mas não consegui confirmar o dono nem o conteúdo. **Não atribuo nenhuma capacidade a ele.** | — | — |
| `astDeniss/business-skills` | 09/07/2026 | **Sem arquivo LICENSE** | 69 playbooks genéricos (cold email, pipeline, propostas, KPIs, SEO local, parcerias, projeções financeiras). Bem escritos, mas sem conteúdo setorial. | Symlinks via `install.sh` | Nenhuma |
| `abinauv/business-consulting` | 28/02/2026 | **MIT** | 16 skills + 24 comandos de consultoria (pesquisa de mercado, análise financeira, risco, precificação). | Plugin do marketplace | O plugin instala um **hook `SessionStart`** que injeta uma persona de "consultor McKinsey" em **todas** as sessões. |

## 2. Seleção: o que é útil para a Seckler

| Necessidade do projeto | Skill escolhida | Por quê | Sobreposições descartadas |
|---|---|---|---|
| Modelo financeiro e cenários | `abinauv/financial-analysis` (MIT) como referência de método | Cobre ponto de equilíbrio, economia unitária e sensibilidade | `astDeniss/financial-projections` (sem licença); pipeline do business-plan-skills (excessivo e com foco na África Oriental) |
| Stress test / bancabilidade antes de pedir crédito | `peterbamuhigire/meta-financial-stress-test` e `meta-bankability-scoring` (MIT) | Disciplina útil para preparar o pacote para banco/CDC | `CRE-AI-Skills/underwriting` (multifamiliar) |
| Compra de imóvel (cenário C) | `CRE-AI-Skills/psa-reviewer`, `property-condition-and-environmental-review`, `title-and-survey-reviewer` | Checklists de due diligence aplicáveis a um galpão pequeno | `lender-sourcing` (não cobre SBA) |
| Pipeline, CRM e outreach | Método de `astDeniss/sales-pipeline-management`, `cold-email-outreach`, `partnership-development` | Etapas com critérios de saída e sequências de follow-up | `abinauv/customer-insights` |
| Risco operacional | `abinauv/risk-management` (MIT) | Registro de riscos (seguro, sinistro, armazenagem de bens de terceiros) | — |
| Governo federal | **Nenhuma skill disponível.** Usar fontes primárias: SAM.gov, documentos do DP3 e GSA. | O repositório federal não está acessível | — |

## 3. Arquitetura recomendada

```
                    Você (aprovação de qualquer contato, proposta ou crédito)
                                      │
     ┌────────────────────────────────┼─────────────────────────────────┐
     │                                │                                 │
 Pesquisa (web, fontes datadas)   Modelo financeiro              Execução comercial
 docs/02, docs/05                 model/build_model.py → .xlsx   data/prospects.csv → CRM
                                  (premissas azuis + fórmulas)    docs/06 scripts e propostas
     │                                │                                 │
     └──────────────► Painel semanal de KPIs (aba KPIs) ◄────────────────┘
```

* **Nada de plugins com hooks globais agora.** O hook `SessionStart` do business-consulting altera o comportamento de todas as sessões, e o hook do business-plan-skills intercepta comandos Bash. Se quiser usá-los, instale **por projeto** (`--scope project`) e só depois de revisar o hook.
* **Skills sem licença** (`astDeniss`, `CRE-AI-Skills`): usar apenas como leitura de referência. Não copiar para este repositório, porque sem licença explícita não há permissão de redistribuição.
* **Instalação mínima, se você aprovar:** copiar para `.claude/skills/` deste repositório somente `abinauv/.../financial-analysis` e `risk-management` (MIT, sem hooks quando copiadas como pastas soltas) e `peterbamuhigire/.../meta-financial-stress-test` (MIT; verificar se referencia arquivos de `references/` de outras pastas antes de copiar).
* **Integrações necessárias** (nenhuma credencial foi usada): conta no SAM.gov (cadastro da empresa), MyFloridaMarketPlace, OrangeBids e uma ferramenta de CRM (a planilha basta no início).

## 4. Limitação de ambiente encontrada

A política de rede deste ambiente na nuvem **bloqueia acesso direto** a `sam.gov`, `api.sam.gov`, `api.usaspending.gov`, `sba.gov`, `flsenate.gov` e `leg.state.fl.us` (proxy retorna 403). A pesquisa foi feita por busca na web, que lê essas páginas indiretamente. Para consultas diretas às APIs (ex.: puxar oportunidades do SAM.gov por NAICS), libere esses domínios em *Network access* nas configurações do ambiente: https://code.claude.com/docs/en/cloud-environments#network-access
