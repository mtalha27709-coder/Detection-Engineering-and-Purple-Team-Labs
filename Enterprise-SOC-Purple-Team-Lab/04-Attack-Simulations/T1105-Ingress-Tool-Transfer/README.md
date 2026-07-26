# T1105 - Ingress Tool Transfer

## Objective

Simulate the transfer or execution of a tool within the lab environment and observe how Wazuh detects the activity.

---

## MITRE ATT&CK

- Technique ID: T1105
- Technique: Ingress Tool Transfer
- Tactic: Command and Control

---

## Lab Environment

- SIEM: Wazuh
- Monitoring: Sysmon
- Target: Windows 10

---

## Attack Summary

During the lab, Wazuh generated an alert mapped to MITRE ATT&CK T1105 after detecting executable/tool-related activity.

---

## Detection

- Wazuh Alert Generated
- MITRE: T1105
- Severity: High/Critical (depending on alert)

---

## Result

The activity was successfully detected and mapped by Wazuh to MITRE ATT&CK T1105.