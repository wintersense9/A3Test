# PIH RAG Proposal — 审查与修改方案

> 对象：`Project_Proposal.pdf`（COMP3050 Individual Dissertation, 2026–2027）
> 核验方式：Crossref REST API 逐条比对 DOI 元数据（2026-10-31）

---

## 一、结论摘要

| 维度 | 现状 | 判定 |
|---|---|---|
| 引用 | 4 条，**全部为编造文献**（DOI 指向无关论文） | 致命，必须全部替换 |
| 正文字数 | 774 词（上限 2000，不含封面与参考文献） | 严重不足，有约 1200 词扩展空间 |
| Gap 逻辑 | "ML 可解释性差 → 所以做 RAG" | 任务错配，论证链断裂 |
| Aim | 单句，符合硬性要求 | 合格，但表述不可验收 |
| Objectives | 6 条，O5 把 4 项评估塞进一条，无成功标准 | 需重构 |
| 模板残留 | `this is my referenced paper [?].` | 必须删除 |
| 排版 | `References` 标题重复；`IIIIV`、`VVI`、`IL6` | 必须修正 |
| 引用风格 | PDF 为 APA，`.tex` 导言区为 biblatex IEEE | 冲突，需统一 |

---

## 二、四条参考文献的核验结果（全部无效）

| 提案中写作 | 声明的 DOI | Crossref 实际指向 |
|---|---|---|
| [1] Chakraborty et al. (2023). Machine learning approaches for skin pigmentation prediction. *Comput Biol Med, 163*, 107215 | `10.1016/j.compbiomed.2023.107215` | C2FTFNet: Coarse-to-fine transformer network for joint optic disc and cup segmentation（*Comput Biol Med, **164***, 107215） |
| [2] Eimpunth & Manuskiatti (2013). Post-inflammatory hyperpigmentation: A review. *JEADV, 27*(10), 1205–1213 | `10.1111/j.1468-3083.2012.04572.x` | Umbilical cord mesenchymal stem cell transplantation in drug-induced Stevens–Johnson syndrome（*JEADV, 27*(5), 659–661） |
| [3] Hossain (2021). Oxidative stress and inflammation in PIH. *J Cosmet Dermatol, 20*(8), 2415–2422 | `10.1111/jocd.14067` | Corrective strategies for poor appearance after tissue expansion for temporal and sideburn cicatricial alopecia（*JCD, 20*(12), 4001–4004） |
| [4] Madan & Gawkrodger (2022). Skin barrier function and microbiome in PIH. *BJD, 187*(3), 345–352 | `10.1111/bjd.21568` | PS05: Extreme psychogenic self-mutilation: a case series（*BJD, 187*(S1), 223） |

**处置**：删除全部 4 条；Background 中所有归因句需重新挂到真实文献。事实内容本身大体成立，但**当前没有任何一条有可核查的出处**。

---

## 三、Gap 逻辑诊断与重写

### 3.1 现有论证链的问题

```
PIH 多因素 → ML 色素预测可解释性差 → 做一个 RAG 网页应用生成方案
```

第三步不成立：**"预测模型不可解释"推不出"需要 RAG 生成方案"**。系统不做预测，gap 与贡献不对应。

### 3.2 建议的三层 gap（任务错配 → 证据碎片化 → 无评估协议）

1. **任务层**：既往计算工作聚焦色素**预测**（severity / risk），而非**证据驱动的决策支持**。
2. **证据层**：成分疗效数据分散在小样本、异质终点（melanin index / IGA / 照片分级）的试验中；无结构化 schema 把"成分 → 人群 → 终点 → 效应 → 证据等级"连起来。
3. **系统层**：现有工具（DTC 远程皮肤科 App、通用 LLM）给出建议但**无 claim 级可追溯性**；且方案级生成需要满足硬约束（配伍冲突、孕期、屏障状态），现有 RAG 研究未覆盖该评估场景。

### 3.3 可直接替换的 Gap 段（英文）

> Three gaps emerge from this literature. First, PIH evidence is **fragmented**: efficacy data for individual actives sit in small, heterogeneous trials that differ in population (Fitzpatrick type, acne severity), dose, comparator and outcome measure, and no structured schema links an ingredient to its population, endpoint and strength of evidence. Second, existing consumer-facing tools — direct-to-consumer teledermatology apps and general-purpose LLMs — **produce recommendations without per-claim traceability**, so users cannot verify whether an ingredient is supported, and safety caveats are easily lost. Third, **no evaluation protocol exists** for regimen-level dermatology generation, where success requires not only fluent text but constraint satisfaction (no conflicting actives, pregnancy-safe, barrier-appropriate) and claim-level faithfulness. Prior computational work on pigmentation has concentrated on **prediction** of severity or risk rather than on evidence-grounded **decision support**, leaving this translation step unaddressed.

---

## 四、Motivation 的三层结构（当前只写了第一层）

| 层次 | 内容要点 | 可引文献 |
|---|---|---|
| 临床负担 | Fitzpatrick III–VI 高发；可持续数月至数年；QoL 显著受损；东亚人群易感 | Kaufman et al., 2018；França & Keri, 2017；Bhattacharya et al., 2024 |
| 信息环境 | 患者主要从社媒/电商获取方案，misinformation 普遍；DTC App 建议有限且无引用 | Lam et al., 2026；Kochmann & Locatis, 2016 |
| 时机（why now） | RAG 可在生成时绑定检索证据；科学文献合成与 claim 级归因方法已成熟 | Lewis et al., 2020；Asai et al., 2024；Rashkin et al., 2023 |

补充一句**受益对象**：皮肤科医生（辅助方案制定）、患者（可核验的自我管理）、化妆品研发（成分证据盘点）。对应 Rubric 的 *"importance of the area is clearly stated"*。

---

## 五、文献综述（英文，可直接粘贴，约 700 词）

### 5.1 疾病负担与临床意义

> Post-inflammatory hyperpigmentation (PIH) is an acquired hypermelanosis that follows cutaneous inflammation, most commonly after acne, eczema, trauma or aesthetic procedures. It is disproportionately prevalent in individuals with Fitzpatrick skin types III–VI, and in East Asian and African populations, where even mild inflammatory insults can produce prolonged pigmentary change (Kaufman et al., 2018). PIH frequently persists for months to years, and its psychosocial burden is comparable to that of chronic acne, with reported effects on self-esteem and social interaction (França & Keri, 2017; Bhattacharya et al., 2024).

### 5.2 发病机制：为什么不能单通路处理

> Mechanistically, inflammatory mediators released by keratinocytes and infiltrating cells — including IL-1α, IL-6, TNF-α, endothelin-1 and stem cell factor — upregulate MITF and tyrosinase through cAMP/PKA, MAPK and PI3K/Akt signalling, increasing melanin synthesis and transfer (D'Mello et al., 2016; Pillaiyar et al., 2017). Melanin deposited in the dermis is cleared slowly, which explains why PIH in darker skin outlasts epidermal hyperpigmentation. Because inflammation, melanogenesis and barrier status interact, single-pathway interventions typically yield partial responses, and regimen design must therefore combine actives that act on different points of the cascade (Kaufman et al., 2018).

### 5.3 成分证据：强、弱与异质

> Topical actives intervene at three points: melanin synthesis (tyrosinase inhibition and MITF suppression by tranexamic acid, cysteamine, arbutin and kojic acid), inflammatory signalling (niacinamide and azelaic acid), and keratinisation or retinoid-mediated turnover. Evidence strength varies substantially. Oral tranexamic acid reduced PIH incidence after Q-switched ruby laser in a prospective randomised controlled trial (Kato et al., 2011), and 20% azelaic acid was compared with 5% tranexamic acid in a single-blinded randomised trial in acne-induced PIH (Sobhan et al., 2023). Cysteamine has prospective but largely open-label support (Desai et al., 2021), while niacinamide has both mechanistic and clinical evidence for pigmentation control (Boo, 2021). Chemical peels are effective adjuncts but carry a risk of inducing further PIH in darker skin (Sahu et al., 2019). Crucially, most trials are small, single-centre and use heterogeneous endpoints such as melanin index, investigator global assessment or photographic grading, which makes direct comparison — and therefore regimen selection — difficult.

### 5.4 方案选择的真实难点

> Selecting a regimen is thus a synthesis task rather than a lookup: it requires weighing efficacy against tolerability, Fitzpatrick-specific irritation risk, pregnancy status, and interactions among actives and exfoliants across an AM/PM sequence. Consumer-facing tools do not support this synthesis. Direct-to-consumer teledermatology apps offer limited recommendations with little or no cited evidence (Kochmann & Locatis, 2016), and dermatological misinformation circulates widely on social platforms (Lam et al., 2026). General-purpose LLMs can produce fluent regimens but are prone to ungrounded or unsafe claims (Matin et al., 2023; Landau et al., 2025).

### 5.5 RAG 与证据落地

> Retrieval-augmented generation grounds output in an external corpus by retrieving passages before decoding (Lewis et al., 2020). Later work adds self-critique (Asai et al., 2023) and citation-level grounding for scientific literature synthesis (Asai et al., 2024), while attribution can be measured at claim level (Rashkin et al., 2023) and automatically with RAGAS (Es et al., 2023). These methods have not been applied to PIH regimen generation, where the retrieval unit must be a structured **evidence item** — population, intervention, comparator, endpoint, effect and grade — rather than a free-text abstract, and where safety constraints are hard requirements rather than stylistic preferences.

---

## 六、Aim 与 Objectives 修订

### 6.1 Aim（建议替换）

> The aim of this project is to design, implement and evaluate an evidence-grounded retrieval-augmented generation (RAG) web application that produces personalised, safety-checked PIH skincare regimens, in which every recommended ingredient is linked to retrievable dermatological evidence and an explicit evidence grade.

相对原句新增三点可验收要素：**design / implement / evaluate**、**personalised**、**safety-checked + evidence grade**。

### 6.2 Objectives（重构为 6 条，每条带成功标准）

| # | Objective | 交付物 / 成功标准 |
|---|---|---|
| O1 | 系统综述 PIH 机制、成分证据与 RAG 方法，定义证据 schema | schema v1 + ≥40 条核心文献 |
| O2 | 构建 PIH 语料与成分证据库、检索索引 | ≥150 篇文献、15–20 种成分、明确的纳入/排除标准 |
| O3 | 实现 RAG 管线：检索 → 证据组装 → 生成 → **claim 级引用** | 每条建议可回溯到证据条目；无据时弃答 |
| O4 | 实现**安全约束层**：配伍冲突、孕期、屏障状态、Fitzpatrick 风险 | 规则集 + 单元测试，冲突检出率 100% |
| O5 | 开发 Web 原型（画像输入 + AM/PM 方案 + 证据面板） | 可运行；小样本 SUS ≥ 70（涉人需伦理审批） |
| O6 | 对比评估（LLM-only / RAG / RAG+规则）与论文写作 | Recall@5、nDCG@10、引用精确率、忠实度、约束违规率 |

**说明**：O4 是当前完全缺失但必须补的一环。"regimen"意味着多步骤、多成分与排序，纯 RAG 检索摘要无法产出方案。它也把项目从"文献搜索器"抬升为"决策支持系统"。

### 6.3 方案输出 schema（建议在方法论中定义）

```json
{
  "profile": {"fitzpatrick": "IV", "acne_severity": "moderate", "pregnancy": false, "barrier": "compromised"},
  "AM": [
    {"step": "antioxidant", "ingredient": "niacinamide", "conc": "4-5%", "evidence_ids": ["Boo2021"], "grade": "B", "cautions": []},
    {"step": "sunscreen", "ingredient": "tinted mineral SPF50", "evidence_ids": ["Kaufman2018"], "grade": "C", "cautions": []}
  ],
  "PM": [
    {"step": "active", "ingredient": "azelaic acid", "conc": "15-20%", "evidence_ids": ["Sobhan2023"], "grade": "A", "cautions": ["stinging"]},
    {"step": "moisturiser", "ingredient": "ceramide", "evidence_ids": [], "grade": "C", "cautions": []}
  ],
  "warnings": ["avoid hydroquinone without dermatological supervision"],
  "conflict_checks": ["no retinoid + AHA same night", "pregnancy-safe"]
}
```

---

## 七、已核验参考文献库（20 条，可直接使用）

所有条目均经 Crossref 元数据核对。APA 7 格式。

### PIH 临床与机制

Kaufman, B. P., Aman, T., & Alexis, A. F. (2018). Postinflammatory hyperpigmentation: Epidemiology, clinical presentation, pathogenesis and treatment. *American Journal of Clinical Dermatology, 19*(4), 489–503. https://doi.org/10.1007/s40257-017-0333-6

Patel, A. B. (2014). Postinflammatory hyperpigmentation: Review of pathogenesis, prevention, and treatment. *Pigment International, 1*(2), 59. https://doi.org/10.4103/2349-5847.147043

França, K., & Keri, J. (2017). Psychosocial impact of acne and postinflammatory hyperpigmentation. *Anais Brasileiros de Dermatologia, 92*(4), 505–509. https://doi.org/10.1590/abd1806-4841.20175645

Bhattacharya, I., Dsouza, P., & Dhaka, K. (2024). Impact of postinflammatory hyperpigmentation on quality of life in patients with skin of color. *Pigment International, 11*(1), 33–41. https://doi.org/10.4103/pigmentinternational.pigmentinternational_1_23

D'Mello, S. A. N., Finlay, G. J., Baguley, B. C., & Askarian-Amiri, M. E. (2016). Signaling pathways in melanogenesis. *International Journal of Molecular Sciences, 17*(7), 1144. https://doi.org/10.3390/ijms17071144

Pillaiyar, T., Manickam, M., & Jung, S.-H. (2017). Recent development of signaling pathways inhibitors of melanogenesis. *Cellular Signalling, 40*, 99–115. https://doi.org/10.1016/j.cellsig.2017.09.004

### 成分证据（RCT / 临床）

Boo, Y. C. (2021). Mechanistic basis and clinical evidence for the applications of nicotinamide (niacinamide) to control skin aging and pigmentation. *Antioxidants, 10*(8), 1315. https://doi.org/10.3390/antiox10081315

Kato, H., Araki, J., Eto, H., Doi, K., Hirai, R., Kuno, S., Higashino, T., & Yoshimura, K. (2011). A prospective randomized controlled study of oral tranexamic acid for preventing postinflammatory hyperpigmentation after Q-switched ruby laser. *Dermatologic Surgery, 37*(5), 605–610. https://doi.org/10.1111/j.1524-4725.2011.01957.x

Sobhan, M., Talebi-Ghane, E., & Poostiyan, E. (2023). A comparative study of 20% azelaic acid cream versus 5% tranexamic acid solution for the treatment of postinflammatory hyperpigmentation in patients with acne vulgaris: A single-blinded randomized clinical trial. *Journal of Research in Medical Sciences, 28*(1). https://doi.org/10.4103/jrms.jrms_443_22

Desai, S., Hartman, C., Grimes, P., & Shah, S. (2021). Topical stabilized cysteamine as a new treatment for hyperpigmentation disorders: Melasma, post-inflammatory hyperpigmentation, and lentigines. *Journal of Drugs in Dermatology, 20*(12), 1276–1279. https://doi.org/10.36849/jdd.6367

Sahu, P., Dayal, S., Sangal, B., & Sharma, S. (2019). Role of chemical peels in postinflammatory hyperpigmentation: A comprehensive review. *Pigment International, 6*(2), 59. https://doi.org/10.4103/pigmentinternational.pigmentinternational_22_19

### 现有工具的不足

Kochmann, M., & Locatis, C. (2016). Direct to consumer mobile teledermatology apps: An exploratory study. *Telemedicine and e-Health, 22*(8), 689–693. https://doi.org/10.1089/tmj.2015.0189

Lam, T., Wollina, U., Hoenig, L. J., & Parish, L. C. (2026). Dermatology misinformation on the Chinese social media platform known as RedNote/Xiaohongshu. *Clinics in Dermatology, 44*(1), 122–131. https://doi.org/10.1016/j.clindermatol.2025.09.003

Matin, R. N., Linos, E., & Rajan, N. (2023). Leveraging large language models in dermatology. *British Journal of Dermatology, 189*(3), 253–254. https://doi.org/10.1093/bjd/ljad230

Landau, M., Kroumpouzos, G., & Goldust, M. (2025). Large language models in cosmetic dermatology. *Journal of Cosmetic Dermatology, 24*(2). https://doi.org/10.1111/jocd.70044

### RAG 与评估

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems, 33*, 9459–9474.

Asai, A., Wu, Z., Wang, Y., Sil, A., & Hajishirzi, H. (2024). Self-RAG: Learning to retrieve, generate, and critique through self-reflection. *ICLR 2024*. arXiv:2310.11511

Asai, A., He, J., Shao, R., Shi, W., Singh, A., Chang, J. C., Lo, K., Soldaini, L., Feldman, S., Downey, D., Yih, W., Koh, P. W., & Hajishirzi, H. (2024). OpenScholar: Synthesizing scientific literature with retrieval-augmented LMs. arXiv:2411.14199

Rashkin, H., Nikolaev, V., Lamm, M., Aroyo, L., Collins, M., Das, D., Petrov, S., Tomar, G. S., Turc, I., & Reitter, D. (2023). Measuring attribution in natural language generation models. *Computational Linguistics, 49*(4), 777–840. https://doi.org/10.1162/coli_a_00486

Es, S., James, J., Espinosa-Anke, L., & Schockaert, S. (2024). RAGAS: Automated evaluation of retrieval augmented generation. *EACL 2024 System Demonstrations*. arXiv:2309.15217

### 元数据说明

- Patel (2014) 与 Sahu (2019)：Crossref 仅返回起始页 59，未返回页码范围；用 Zotero 按 DOI 导入可自动补全，**不要自行编造页码**。
- Sobhan (2023)、Landau (2025)：Crossref 未返回页码；按 DOI 导入补全。
- Kaufman et al.：Crossref `issued` 为 2017（在线发表），卷期为 19(4)、页码 489–503；通行引用年份为 **2018**。

---

## 八、引用风格：必须先统一

当前 PDF 用 **APA 作者–年份**，而 `.tex` 导言区是 `biblatex style=ieee`（数字制）。二者不可混用。

| 选择 | LaTeX 配置 | 正文命令 |
|---|---|---|
| **APA（推荐）** | `\usepackage[backend=biber,style=apa]{biblatex}` | `\parencite{}` / `\textcite{}` |
| IEEE | `\usepackage[backend=biber,style=ieee,sorting=none]{biblatex}` | `\cite{}`（作者–年份句子需重写） |

推荐 APA：现有正文已是作者–年份叙述（"Kaufman et al. (2018) note that…"），改 IEEE 需重写全部句子；改 APA 只需替换 4 条假文献。

编译顺序：`pdflatex → biber → pdflatex → pdflatex`。

---

## 九、字数预算（上限 2000，不含封面与参考文献）

| 部分 | 当前 | 建议 |
|---|---|---|
| Background & Motivation | ~600 | 950–1050（含第五节综述） |
| Aim & Objectives | ~120 | 250（含成功标准） |
| Work Plan | ~250 | 400（任务—交付物—风险对应） |
| **合计** | **774** | **1650–1900** |

---

## 十、提交前检查清单

- [ ] 删除第 2 页 `this is my referenced paper [?].`
- [ ] 删除重复的 `References` 标题（保留 `\printbibliography[heading=none]`）
- [ ] 替换全部 4 条假文献为第七节真实条目
- [ ] 修正 `IIIIV` → `III–IV`、`VVI` → `V–VI`、`IL6` → `IL-6`
- [ ] 统一 `postinflammatory` / `post-inflammatory` 拼写
- [ ] 按第六节替换 Aim 与 Objectives
- [ ] 补 Gap 段（3.3）与 Motivation 三层（第四节）
- [ ] 统一引用风格（第八节）
- [ ] 封面占位符（标题、邮箱、导师、专业）全部替换
- [ ] `\cite` 的 key 与 `.bib` 条目逐字一致
- [ ] 跑完 `pdflatex → biber → pdflatex → pdflatex`，确认无 "Citation undefined"

---

## 十一、与现有代码的衔接

现有 `Project2` 为**抗衰老**方向的 RAG 管线，机制标签为 `collagen_synthesis / mmp_inhibition / antioxidant / anti_glycation / photoprotection / senolytics / barrier_repair / hydration`。Proposal 已转向 **PIH**，需三处改造：

1. **机制标签**改为 PIH 通路：`melanogenesis` / `inflammation` / `barrier` / `keratinisation` / `photoprotection`。
2. **证据 schema**：由单一 `score` 改为结构化证据条目（PICOS + 研究类型 + 样本量 + 终点 + 效应量 + 证据等级）。
3. **约束层**：新增配伍冲突、孕期禁用、屏障受损慎用、Fitzpatrick 风险规则（对应 Objective 4）。

否则 Objective 3 与 Objective 4 无法交付。
