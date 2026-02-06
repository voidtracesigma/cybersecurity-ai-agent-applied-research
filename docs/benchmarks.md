# Benchmarks

## Offensive Benchmarks

### 1. Reconnaissance

`question answering`: 

| name | paper | - |
|---|---|---|
| OCCULT        | OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities. (2025) | - |
| Cyberbench    | Cyberbench: A multi-task benchmark for evaluating large language models in cybersecurity (2024) | - |
| Cybermetric   | Cybermetric: A benchmark dataset for evaluating large language models knowledge in cybersecurity (2024) | - |
| CYBERSECEVAL  | CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models (2024) | - |

`enables attack generation and execution`:

| name | paper | - |
|---|---|---|
| AutoPenBench        | AutoPenBench: Benchmarking Generative Agents for Penetration Testing (2024) | - |


### 2. Weaponization

`malware creation`:

| name | paper | - |
|---|---|---|
| RedCode    | RedCode: Risky Code Execution and Generation Benchmark for Code Agents | - |
| CySecBench | Cysecbench: Generative aibased cybersecurity-focused prompt dataset for benchmarking large language models | - |
 
`insecure code generation`: 

| name | paper | - |
|---|---|---|
| CyberSecEval | CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models (2024) | - |
| SecCodePLT |  SecCodePLT: A Unified Platform for Evaluating the Security of Code GenAI | - |
| BaxBench | Baxbench: Can LLMs generate correct and secure backends? | - |
| SecRepoBench | Secrepobench: Benchmarking llms for secure code generation in real-world repositories | - |

`vulnerability exploitation`:

BountyBench [275] 
CVE-Bench [287] 

`PoC generation`:
CyberGym [247]


### Attack Steps 3∼7. Delivery,Exploitation,Installation,C&C,Action on objectives

`Q&A`:
* OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities
* Cyberbench: A multi-task benchmark for evaluating large language models in cybersecurity
* Cybermetric: A benchmark dataset for evaluating large language models knowledge in cybersecurity
* CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models.

`partial attack steps and use dynamic testing as the judge`:
* SecCodePLT: A Unified Platform for Evaluating the Security of Code GenAI
* AutoPenBench: Benchmarking Generative Agents for Penetration Testing (2024)

`CTF benchmarks`: 
* NYU CTF Dataset: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security
* Cybench: A framework for evaluating cybersecurity capabilities and risk of language models

---

## Defensive Benchmarks

### 1. Proactive testing
Benchmarking penetration testing is related to attack benchmarking, which remains at an early stage with AutoPenBench [81]. 

static benchmarks with labeled functions:
* eyeballvul: a future-proof benchmark for vulnerability detection in the wild
* Vulnerability Detection with Code Language Models: How Far Are We?
* HackTheBox. https://www.hackthebox.com/
* owasp. https://owasp.org/
* Asleep at the keyboard? assessing the security of github copilot’s code contributions
* LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations. 
* llm cannot reliably identify and reason about security vulnerabilities (yet?): A comprehensive evaluation
* vulhub. https://vulhub.org/

For static benchmarks, most existing benchmarks remain at the individual function level, e.g., PrimeVul [64] and SVEN [101]. 
* PrimeVul. Vulnerability Detection with Code Language Models: How Far Are We?
* SVEN. Large language models for code: Security hardening and adversarial testing

project-level vulnerability detection:
* SecCodePLT [265]

dynamic benchmarks with fuzzing instrumentation and execution environment:
* Fuzzbench: an open fuzzer benchmarking platform and service. 
* {OSS-Fuzz}-google’s continuous fuzzing service for open source software


### 2: Attack detection
network intrusion detection and malware detection: [17, 208, 264]. 
* Drebin: Effective and explainable detection of android malware in your pocket
* Toward generating a new intrusion detection dataset and intrusion traffic characterization
* Bodmas: An open dataset for learning based temporal analysis of pe malware

Recent research [16] highlights these benchmarks’ limitations in data quality (duplicated data, shortcuts) and label accuracy. 
* Dos and don’ts of machine learning in computer security

Transformers show very high accuracy on these benchmarks [92, 142]. Besides attack detections, CTIBench [7] designs tasks for LLMs to pinpoint the specific CWEs and attack techniques for given attack instances.
* netfound: Foundation model for network security.
* Et-bert: A contextualized datagram representation with pre-training transformers for encrypted traffic classification.
* Ctibench: A benchmark for evaluating llms in cyber threat intelligence

### 3: Triage & forensic
* CRUXEval [86] benchmarks PoC generation for vulnerable C/C++ codes with overflow bugs, showing that GPT-4o achieves 75% pass@1 success rate. 
* CyberGym [247] offers more challenging tasks for agents, including PoC generation on real-world codebases with vulnerability descriptions


### 4&5: Remediation development and deployment 

extracts issues from multiple GitHub Python projects:
* SWE-bench [119]

works extend the SWE-bench to multi-modal settings [261] and the Java language [272]. 
* SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?
* Swe-bench-java: A github issue resolving benchmark for java

security patches:
* SecCodePLT [265] (Python, C/C++, Java) 
* BountyBench [275] (C, Python, JavaScript/TypeScript)

---

## tmp
34 cybersecurity benchmarks and categorize them based on our taxonomy

| **Attack Step**                            | **Coverage**                     | **Metric**             | **Dynamic Updates** |
| ------------------------------------------ | -------------------------------- | ---------------------- | ------------------- |
| Step 1: Reconnaissance                     | Reconnaissance                   | LLM judgment + Dynamic | ✗                   |
| Step 2: Malware creation                   | Malware creation                 | VirusTotal             | ✗                   |
| Vulnerability exploitation                 | Exploitation                     | Static + Dynamic       | ✓                   |
| Step 3–5: Initial access & delivery        | Initial access & delivery        | LLM judgment + Dynamic | ✗                   |
| Exploitation & installation                | Exploitation & installation      | Dynamic                | ✗                   |
| Persistence & evasion                      | Persistence & evasion            | NA                     | ✗                   |
| Step 6–7: Remote control & target location | Remote control & target location | LLM judgment + Dynamic | ✓                   |


| **Defense Step**           | **Quantity** | **Notable Examples**          | **Key Limitations**                                       |
| -------------------------- | ------------ | ----------------------------- | --------------------------------------------------------- |
| 1. Penetration testing     | Few          | AutoPenBench                  | Limited attacks, limited target systems, limited metrics  |
| 1. Vulnerability Detection | Many         | PrimeVul, FuzzBench, OSS‑Fuzz | Limited complexity/diversity, low‑quality labels          |
| 2. Attack Detection        | Many         | IDS2018, Drebin, BODMAS       | Low‑quality data and labels, lack OOD/hidden tests        |
| 3. PoC & Root Cause        | Few          | CRUXEval                      | Low task complexity, no benchmark for root cause analysis |
| 3. Reverse Engineering     | Many         | ByteWeight, ReSym             | Data leakage, incomplete task coverage                    |
| 4. Remediation Development | Few          | SWE‑bench                     | Noisy data, no security bug benchmarks, limited languages |
| 5. Remediation Deployment  | None         | —                             | N/A                                                       |


1. Penetration testing     
1. Vulnerability Detection 
2. Attack Detection        
3. PoC & Root Cause        
3. Reverse Engineering     
4. Remediation Development 
5. Remediation Deployment  



## references
1. Frontier AI’s Impact on the Cybersecurity Landscape
