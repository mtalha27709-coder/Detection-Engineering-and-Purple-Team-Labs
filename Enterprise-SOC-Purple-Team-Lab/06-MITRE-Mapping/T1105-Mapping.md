# T1105 - Ingress Tool Transfer

## MITRE Overview

T1105 describes the transfer of additional tools or payloads onto a compromised system after initial access. Threat actors commonly use this technique to deploy credential dumping tools, malware, remote administration utilities, or ransomware components.

## Purple Team Activity

Executable-related activity generated an alert that Wazuh mapped to T1105.

## Detection

- Sysmon File Creation Events
- Wazuh Detection Rules

## Security Impact

Detecting transferred tools enables defenders to interrupt attackers before additional malicious capabilities are introduced.

## SOC Value

Monitoring executable creation and transfer activities improves endpoint visibility and supports early-stage incident response.

## Result

? Successfully mapped to MITRE ATT&CK Technique T1105.