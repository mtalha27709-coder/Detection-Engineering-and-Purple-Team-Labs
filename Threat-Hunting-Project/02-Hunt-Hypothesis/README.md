# 02 - Hunt Hypothesis

## Overview

Threat hunting is a proactive cybersecurity practice where security analysts search for indicators of malicious activity before a security incident is confirmed. Unlike traditional alert-based monitoring, threat hunting focuses on identifying hidden threats that may not generate high-confidence alerts.

In this project, threat hunting is performed using Windows Sysmon logs collected and analyzed by the Wazuh SIEM platform. Each hunt is based on a predefined hypothesis, followed by attack simulation, log analysis, investigation, IOC extraction, and MITRE ATT&CK mapping.

---

# What is a Hunt Hypothesis?

A hunt hypothesis is an assumption about how an attacker may behave inside an environment. Instead of searching logs randomly, analysts first define a possible attacker behavior and then validate that assumption using available telemetry.

This structured approach makes threat hunting more efficient, repeatable, and aligned with real-world Security Operations Center (SOC) practices.

---

# Threat Hunting Methodology

Each hunt performed in this project follows the same workflow:

1. Define the hunting hypothesis.
2. Simulate attacker activity.
3. Collect endpoint telemetry using Sysmon.
4. Analyze logs in Wazuh.
5. Investigate suspicious events.
6. Extract Indicators of Compromise (IOCs).
7. Map findings to the MITRE ATT&CK framework.
8. Document findings and recommendations.

---

# Planned Threat Hunting Scenarios

| Hunt | Description | MITRE ATT&CK |
|-------|-------------|--------------|
| Hunt 01 | Suspicious PowerShell Execution | T1059.001 |
| Hunt 02 | Encoded PowerShell Commands | T1027, T1059.001 |
| Hunt 03 | Network Discovery | T1016, T1049 |
| Hunt 04 | System Discovery | T1082 |
| Hunt 05 | User Discovery | T1033, T1087 |
| Hunt 06 | Process Discovery | T1057 |
| Hunt 07 | Credential Access | T1003 |
| Hunt 08 | Registry Persistence | T1547.001 |
| Hunt 09 | File Activity | T1070 |
| Hunt 10 | Living-off-the-Land Binaries (LOLBins) | Multiple Techniques |

---

# Tools Used

- Wazuh SIEM
- Sysmon
- Windows 10
- Kali Linux
- Atomic Red Team
- MITRE ATT&CK Framework

---

# Expected Outcome

By following these hunt hypotheses, the project demonstrates how security analysts can proactively identify attacker behavior, investigate suspicious activities, extract meaningful indicators, and improve an organization's detection capabilities using Wazuh and Sysmon.

---

# Next Step

The next phase of the project focuses on the first hunting scenario:

**Hunt 01 – Suspicious PowerShell Execution**

This hunt demonstrates how PowerShell activity can be identified, investigated, and mapped to the MITRE ATT&CK framework using Wazuh and Sysmon logs.