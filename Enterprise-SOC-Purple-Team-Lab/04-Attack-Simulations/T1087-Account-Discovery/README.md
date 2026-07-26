# T1087 - Account Discovery

## Overview

During the Purple Team lab, the initial objective was to simulate the MITRE ATT&CK technique **T1046 - Network Service Discovery**. However, after executing Windows enumeration commands, Wazuh generated an alert mapped to **T1087 - Account Discovery** instead.

This demonstrates that Wazuh successfully identified user account enumeration activity and mapped it to the appropriate MITRE ATT&CK technique.

---

## Objective

- Simulate Windows enumeration activity.
- Observe how Wazuh detects reconnaissance behavior.
- Validate MITRE ATT&CK mapping inside the Wazuh dashboard.

---

## Environment

| Component | Value |
|-----------|-------|
| SIEM | Wazuh |
| Endpoint | Windows 10 |
| Manager | Ubuntu Server |
| Log Source | Sysmon |

---

## Commands Executed

The following Windows commands were executed for account enumeration:

```cmd
whoami

net user

query user
```

These commands generated Windows events that were collected by Sysmon and forwarded to Wazuh.

---

## Detection

Wazuh successfully detected the activity and generated the following MITRE ATT&CK mapping.

| MITRE Technique | Description |
|-----------------|-------------|
| T1087 | Account Discovery |

The alert appeared in the Wazuh MITRE ATT&CK dashboard.

---

## Evidence

Screenshots included:

- Windows command execution
- Wazuh MITRE ATT&CK dashboard
- Alert showing **T1087 – Account Discovery**

---

## Result

The planned T1046 simulation did not produce a corresponding MITRE ATT&CK alert. Instead, Wazuh correctly identified the executed commands as **Account Discovery (T1087)**.

This confirms that Sysmon and Wazuh were functioning correctly and successfully detected reconnaissance activity on the monitored Windows endpoint.

---

## MITRE ATT&CK

| Technique | Name |
|-----------|------|
| T1087 | Account Discovery |

---

## Conclusion

The attack simulation successfully demonstrated endpoint visibility using Sysmon and Wazuh. Although the original goal was to observe T1046, the executed commands generated a valid **T1087 – Account Discovery** detection. This highlights Wazuh's ability to classify Windows enumeration activities according to the MITRE ATT&CK framework.