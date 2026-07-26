# T1110 - Brute Force

## MITRE Overview

T1110 represents password guessing attacks against user accounts using repeated authentication attempts. This technique is widely used by attackers attempting to gain unauthorized access to enterprise systems.

## Purple Team Activity

Multiple failed authentication attempts were generated to simulate a brute force attack.

## Detection

- Windows Security Event ID 4625
- Wazuh Authentication Rules

## Security Impact

Successful brute force attacks may lead to unauthorized access, privilege escalation, persistence, and lateral movement.

## SOC Value

Monitoring authentication failures enables analysts to identify password attacks before user accounts become compromised.

## Result

? Successfully mapped to MITRE ATT&CK Technique T1110.