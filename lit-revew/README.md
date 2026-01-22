# Literature Review

* [Attacks Targeting Systems](#attacks-targeting-systems)
  * [Reconnaissance](#reconnaissance)
  * [Weaponization](#weaponization)
  * [Delivery](#delivery)
  * [Exploitation](#exploitation)
  * [Installation](#installation)
  * [Command & Control](#command--control)
  * [Action on Objectives](#action-on-objectives)
* [Attacks Targeting Humans](#attacks-targeting-humans)
* [Proactive and Reactive Defenses](#proactive-and-reactive-defenses)
  * [Proactive testing](#proactive-testing)
  * [Attack detection](#attack-detection)
  * [Triage & forensic](#triage--forensic)
  * [Remediation development and deployment](#remediation-development-and-deployment)
* [Defenses with Provable Guarantees](#defenses-with-provable-guarantees)
* [Defense for Humans](#defense-for-humans)

---

## Attacks Targeting Systems

### Reconnaissance
* Gelei Deng, Yi Liu, Víctor Mayoral-Vilches, Peng Liu, Yuekang Li, Yuan Xu, Tianwei Zhang, Yang Liu, Martin Pinzger, and Stefan Rass. {PentestGPT}: Evaluating and harnessing large language models for automated penetration testing. In 33rd USENIX Security Symposium (USENIX Security 24), pages 847–864, 2024.
* Bartley Richardson, Nicola Sessions, Michael Demoret, Rachel Allen, and Hsin Chen. Applying Generative AI for CVE Analysis at an Enterprise Scale. https://developer.nvidia.com/blog/applying-generative-ai-for-cve-analysisat-an-enterprise-scale/, 2024. Accessed:2024-11-07.
* Yuqiang Sun, Daoyuan Wu, Yue Xue, Han Liu, Haijun Wang, Zhengzi Xu, Xiaofei Xie, and Yang Liu. GPTScan: Detecting Logic Vulnerabilities in Smart Contracts by Combining GPT with Program Analysis. In Proceedings of the IEEE/ACM 46th International Conference on Software Engineering, pages 1–13, 2024.
* Microsoft threat intelligence. Staying ahead of threat actors in the age of AI. https://www.microsoft.com/en-us/security/blog/2024/02/14/staying-ahead-of-threat-actorsin-the-age-of-ai/, 2024.

---

### Weaponization

[64, 137, 151, 176, 198, 209]
[72, 145, 240, 247, 260, 275]
[73, 178, 207, 227, 277]
[21, 94, 116, 163, 234, 250]

| **Ref #** | **Work / Description**                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **[21]**  | Real‑world attack reports involving frontier AI (partial, need reference list) ([arXiv][1])                                             |
| **[64]**  | *PrimeVul: Vulnerability Detection with Code Language Models* (LLM vulnerability detection dataset) — Ding *et al.* (2024) ([arXiv][2]) |
| **[72]**  | Research on AI agents exploiting real‑world N‑day vulnerabilities (explicit paper title in references not visible) ([arXiv][1])         |
| **[73]**  | AI agent exploit research/CTF challenges — specific title in references not visible but tied to benchmark discussions ([arXiv][1])      |
| **[94]**  | DARPA AIxCC AI agents discovering/patching zero‑day vulnerabilities ([arXiv][1])                                                        |
| **[116]** | Real‑world vulnerability/disclosure reports where AI assisted credential/initial access tasks ([arXiv][1])                              |
| **[137]** | Research on LLMs for vulnerability identification tasks ([arXiv][1])                                                                    |
| **[145]** | Research paper in the vulnerability identification/exploitation cluster ([arXiv][1])                                                    |
| **[151]** | Another research paper in malware/vulnerability space ([arXiv][1])                                                                      |
| **[163]** | Real‑world/active reconnaissance reference ([arXiv][1])                                                                                 |
| **[176]** | LLM malware or evasion research quoted in the paper ([arXiv][1])                                                                        |
| **[178]** | Real‑world or benchmarked exploitation work ([arXiv][1])                                                                                |
| **[198]** | Research on LLM vulnerability detection ([arXiv][1])                                                                                    |
| **[207]** | Benchmark research tied to exploit tasks ([arXiv][1])                                                                                   |
| **[209]** | Research referenced in malware or security context ([arXiv][1])                                                                         |
| **[227]** | CTF/privilege escalation benchmark work ([arXiv][1])                                                                                    |
| **[234]** | Real‑world reports of attacks using AI ([arXiv][1])                                                                                     |
| **[240]** | Research on PoC generation benchmarks ([arXiv][1])                                                                                      |
| **[247]** | *CyberGym* benchmark (PoC on real projects) ([arXiv][1])                                                                                |
| **[250]** | Report on real‑world attack instance where frontier AI applied ([arXiv][1])                                                             |
| **[260]** | PoC generation research paper ([arXiv][1])                                                                                              |
| **[275]** | *BountyBench* vulnerability exploitation benchmark ([arXiv][1])                                                                         |
| **[277]** | *CyBench* CTF challenge benchmark ([arXiv][1])                                                                                          |

---

### Delivery
[54, 58, 105, 108, 184, 242]
[76, 116, 163, 172]

---

### Exploitation
* Giulio De Pasquale, Ilya Grishchenko, Riccardo Iesari, Gabriel Pizarro, Lorenzo Cavallaro, Christopher Kruegel, and Giovanni Vigna. {ChainReactor}: Automated privilege escalation chain discovery via {AI} planning. In 33rd USENIX Security Symposium (USENIX Security 24), pages 5913–5929, 2024.

---

### Installation

[24] [84, 203]

* Mika Beckerich, Laura Plein, and Sergio Coronado. Ratgpt: Turning online llms into proxies for malware attacks, 2023.
* Google Threat Intelligence Group. Adversarial misuse of generative ai. https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai, Jan 2025.
* SecurityIntelligence. DeepLocker: How AI Can Power a Stealthy New Breed of Malware. https://securityintelligence.com/deeplockerhow-ai-can-power-a-stealthy-new-breed-ofmalware/, 2024. Accessed: 2024-11-07.

---

### Command & Control
[11, 53, 96, 97, 126, 203, 231]
[24, 44] [120, 174, 202]

---

### Action on Objectives
[215, 233, 243, 255, 265]
[21, 49, 76, 110, 116, 172, 234]
[31, 79, 80, 154, 274]

---


## Attacks Targeting Humans
[13, 15, 26, 33, 48, 69, 71, 83, 102]
[185] [28, 37, 52, 201, 217, 266]
[19, 107, 155, 168, 196, 214, 222]

---

## Proactive and Reactive Defenses
### Proactive testing
### Attack detection
### Triage & forensic
### Remediation development and deployment

---

## Defenses with Provable Guarantees

---

## Defense for Humans

---
