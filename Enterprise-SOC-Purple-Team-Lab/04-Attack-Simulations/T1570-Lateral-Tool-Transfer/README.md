# T1570 - Lateral Tool Transfer

## Objective

Observe how Wazuh detects executable transfer or file creation activities and maps them to MITRE ATT&CK.

---

## MITRE ATT&CK

- Technique ID: T1570
- Technique: Lateral Tool Transfer
- Tactic: Lateral Movement

---

## Lab Environment

- SIEM: Wazuh
- Monitoring: Sysmon
- Target: Windows 10

---

## Detection

Wazuh generated an alert after detecting executable file creation activity and mapped it to MITRE ATT&CK T1570.

---

## Investigation

The alert was reviewed in the Wazuh Dashboard, including:

- Process Name
- File Path
- Timestamp
- MITRE Mapping

---

## Result

Wazuh successfully generated and logged the event as T1570.