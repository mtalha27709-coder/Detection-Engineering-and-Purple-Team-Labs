# T1570 - Lateral Tool Transfer

## MITRE Overview

T1570 describes the transfer of tools or executable files between systems to support lateral movement after an attacker has gained access to the environment.

## Purple Team Activity

Wazuh generated an alert after detecting executable-related activity during the Purple Team exercise.

## Detection

- Sysmon Event ID 11
- Wazuh File Creation Detection Rules

## Security Impact

Detecting suspicious executable transfers helps defenders identify attacker movement before additional systems are compromised.

## SOC Value

Combining endpoint telemetry with MITRE ATT&CK mapping provides analysts with valuable context for threat hunting and incident response.

## Result

? Successfully mapped to MITRE ATT&CK Technique T1570.