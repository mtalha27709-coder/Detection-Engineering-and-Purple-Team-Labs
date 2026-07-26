<div align="center">

# 🔍 Threat Hunting Project

### 🎯 Hunt • Investigate • Analyze • Detect • Improve

<p>
<img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Threat-Hunting-darkgreen?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Wazuh-SIEM-0052CC?style=for-the-badge"/>
<img src="https://img.shields.io/badge/MITRE-ATT%26CK-orange?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Detection-Engineering-red?style=for-the-badge"/>
</p>

<p>
<img src="https://img.shields.io/badge/Sysmon-Microsoft-0078D4?style=flat-square"/>
<img src="https://img.shields.io/badge/Atomic-Red%20Team-darkred?style=flat-square"/>
<img src="https://img.shields.io/badge/Kali-Linux-557C94?style=flat-square&logo=kalilinux"/>
<img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu"/>
<img src="https://img.shields.io/badge/Windows-10-0078D6?style=flat-square&logo=windows"/>
</p>

</div>

---

# 📖 Overview

The **Threat Hunting Project** demonstrates a practical and proactive threat hunting workflow designed to identify suspicious adversary behaviors within an enterprise environment.

The project simulates real-world attacker activities, collects endpoint telemetry, investigates security events, extracts Indicators of Compromise (IOCs), and maps observed behaviors to the **MITRE ATT&CK Framework**.

Unlike traditional alert-driven investigations, this project focuses on **proactive hunting** to uncover threats that may evade automated detection.

---

# 🎯 Project Objectives

- ✅ Develop practical Threat Hunting skills
- ✅ Analyze endpoint telemetry using Sysmon
- ✅ Investigate security events in Wazuh SIEM
- ✅ Identify Indicators of Compromise (IOCs)
- ✅ Map attacker techniques to MITRE ATT&CK
- ✅ Improve Detection Engineering capabilities
- ✅ Understand enterprise hunting workflows

---

# 🔄 Threat Hunting Workflow

```text
🔴 Attack Simulation
        │
        ▼
📡 Endpoint Telemetry (Sysmon)
        │
        ▼
📊 Wazuh SIEM
        │
        ▼
🔍 Threat Hunting
        │
        ▼
🕵️ Investigation
        │
        ▼
📑 IOC Extraction
        │
        ▼
🧩 MITRE ATT&CK Mapping
        │
        ▼
🛡️ Detection Improvement
```

---

# 🛠️ Lab Environment

| Category | Technology |
|-----------|------------|
| 📊 SIEM | Wazuh |
| 📡 Endpoint Monitoring | Sysmon |
| 🎯 Attack Simulation | Atomic Red Team |
| 🖥️ Endpoint | Windows 10 |
| 🔍 Investigation Platform | Wazuh Dashboard |
| 💻 Operating Systems | Windows, Ubuntu, Kali Linux |
| 🧩 Framework | MITRE ATT&CK |

---

# 🧠 Threat Hunting Methodology

## 📝 Step 1 — Create a Hunting Hypothesis

Develop a hypothesis based on expected attacker behavior.

**Example:**

> An attacker may abuse PowerShell to execute malicious commands on a compromised Windows endpoint.

---

## ⚔️ Step 2 — Generate Adversary Activity

Controlled attack simulations were executed using **Atomic Red Team**.

Activities included:

- PowerShell Execution
- Encoded Commands
- Discovery Commands
- LOLBins Abuse
- Persistence Techniques

---

## 📡 Step 3 — Collect Endpoint Telemetry

Sysmon collected detailed endpoint telemetry including:

- Process Creation
- Command-Line Arguments
- Parent-Child Relationships
- Registry Modifications
- File Activity

All telemetry was centralized and analyzed using **Wazuh SIEM**.

---

## 🔍 Step 4 — Investigate Security Events

Security investigations included:

- Wazuh Dashboard Analysis
- Process Investigation
- Command-Line Analysis
- Event Correlation
- Timeline Analysis

---

## 🧩 Step 5 — MITRE ATT&CK Mapping

Observed attacker behaviors were mapped to the MITRE ATT&CK Framework.

| Activity | MITRE Technique |
|----------|-----------------|
| PowerShell Execution | T1059.001 |
| CertUtil Abuse | T1218.010 |
| MSHTA Abuse | T1218.005 |
| System Discovery | T1082 |
| Account Discovery | T1087 |
| Process Discovery | T1057 |
| Scheduled Task Persistence | T1053.005 |

---

# 🎯 Hunting Scenarios

## 🔴 01 — Suspicious PowerShell Hunting

**Objective**

Detect suspicious PowerShell activity.

**Focus**

- Encoded Commands
- Process Creation
- Parent-Child Relationships

**MITRE**

- T1059.001

---

## 🟠 02 — LOLBins Hunting

**Objective**

Detect abuse of trusted Windows binaries.

**Investigated**

- certutil.exe
- mshta.exe

**MITRE**

- T1218.010
- T1218.005

---

## 🔵 03 — Discovery Activity Hunting

**Objective**

Identify attacker reconnaissance activities.

**Commands Investigated**

- systeminfo
- hostname
- whoami
- net user
- tasklist
- wmic

**MITRE**

- T1082
- T1087
- T1057

---

## 🟣 04 — Persistence Hunting

**Objective**

Detect persistence mechanisms.

**Investigated**

- Scheduled Tasks
- Registry Run Keys

**MITRE**

- T1053.005
- T1547.001

---

## 🟢 05 — File Activity Hunting

**Objective**

Analyze suspicious file operations.

Activities included:

- File Creation
- File Modification
- File Deletion
- File Movement

---

# 📂 Project Structure

```text
Threat-Hunting-Project/
│
├── 📄 README.md
├── 📁 01-Hunting-Methodology
├── 📁 02-PowerShell-Hunting
├── 📁 03-Discovery-Hunting
├── 📁 04-LOLBins-Hunting
├── 📁 05-Persistence-Hunting
├── 📁 06-File-Activity-Hunting
├── 📁 07-Investigation-Reports
├── 📁 08-IOC-Extraction
├── 📁 09-MITRE-Mapping
├── 📁 10-Screenshots
└── 📁 11-Conclusion
```

---

# 💡 Skills Demonstrated

- 🔍 Threat Hunting
- 🛡️ Detection Engineering
- 📊 Security Monitoring
- 🚨 SOC Investigation
- 📡 Sysmon Analysis
- 📈 Wazuh SIEM
- 🖥️ Windows Event Analysis
- 📑 IOC Extraction
- 🧩 MITRE ATT&CK Mapping
- 🎯 Adversary Simulation
- 📋 Incident Investigation

---

# 🛡️ Security Value

Threat Hunting enables security teams to proactively identify malicious activity before it escalates into a major incident.

Key benefits include:

- ✅ Improved Detection Coverage
- ✅ Identification of Security Gaps
- ✅ Validation of Defensive Controls
- ✅ Enhanced Detection Rules
- ✅ Reduced Attacker Dwell Time
- ✅ Faster Incident Response

---

# 📚 Key Learning Outcomes

Through this project, I gained hands-on experience in:

- Proactive Threat Hunting
- Endpoint Telemetry Analysis
- IOC Identification
- Windows Event Investigation
- Wazuh SIEM Analysis
- Detection Engineering
- MITRE ATT&CK Mapping
- Security Investigation Methodology

---

# 🚀 Future Improvements

Future enhancements include:

- Sigma Rule Development
- Custom Wazuh Detection Rules
- Threat Intelligence Integration
- Advanced Hunting Queries
- Detection-as-Code
- Automated IOC Enrichment
- SOAR Integration
- Expanded Atomic Red Team Coverage

---

# 🏆 Final Summary

This Threat Hunting Project demonstrates a complete enterprise hunting workflow where adversary simulations are transformed into actionable security intelligence.

Using **Atomic Red Team**, **Sysmon**, **Wazuh**, and the **MITRE ATT&CK Framework**, the project showcases practical skills in proactive threat hunting, security investigations, IOC extraction, and detection improvement.

The methodologies and workflows implemented closely reflect those used by **SOC Analysts**, **Threat Hunters**, **Detection Engineers**, and **Blue Team professionals** in modern enterprise security operations.

---

# 📊 Project Status

| Item | Status |
|------|--------|
| 🚀 Project | ✅ Completed |
| 🔍 Threat Hunting | ✅ Completed |
| 📑 IOC Extraction | ✅ Completed |
| 🧩 MITRE ATT&CK Mapping | ✅ Completed |
| 📊 Investigation Reports | ✅ Completed |
| 📄 Documentation | ✅ Completed |
| 🏆 Overall Outcome | ✅ Successful |

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a Star!

**Made with ❤️ by Muhammad Talha**

</div>