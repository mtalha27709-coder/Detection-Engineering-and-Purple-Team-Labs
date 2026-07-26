# 03 - Hunt 01: Suspicious PowerShell Execution

## Overview

PowerShell is one of the most powerful administrative tools available in Windows environments. Due to its flexibility and ability to execute scripts and system commands, it is frequently abused by attackers during post-exploitation activities.

This hunt focuses on identifying PowerShell execution using Sysmon telemetry collected by Wazuh. The objective is to verify that PowerShell activity can be detected, investigated, and mapped to the MITRE ATT&CK framework.

---

# Hunt Objective

Detect PowerShell execution on a Windows endpoint using Sysmon logs and investigate the generated events through the Wazuh Dashboard.

---

# Hunt Hypothesis

An attacker may execute PowerShell commands to perform malicious actions on a Windows system. These activities should generate Sysmon Process Creation events that can be collected and analyzed by Wazuh.

---

# Attack Simulation

PowerShell was launched on the Windows 10 endpoint, and the following commands were executed to generate process creation events.

```powershell
powershell.exe
hostname
whoami
Get-Process
Get-ChildItem C:\
```

These commands simulate PowerShell activity that can later be investigated using endpoint telemetry.

---

# Detection

The generated events were collected by the Wazuh Agent and forwarded to the Wazuh Manager.

Example hunt queries:

```text
data.win.eventdata.image:*powershell.exe
```

```text
process.name:powershell.exe
```

```text
data.win.system.eventID:1
```

The investigation confirmed that PowerShell execution events were successfully recorded.

---

# Investigation

The following event attributes were reviewed during the investigation:

- Process Name
- Parent Process
- Command Line
- Username
- Hostname
- Process ID (PID)
- Event ID
- Timestamp

These details help analysts determine whether PowerShell execution is legitimate or potentially malicious.

---

# Indicators of Compromise (IOCs)

| IOC | Value |
|------|-------|
| Process | powershell.exe |
| Log Source | Sysmon |
| Event ID | 1 (Process Creation) |
| Detection Platform | Wazuh |

---

# MITRE ATT&CK Mapping

| Technique | ID |
|-----------|----|
| Command and Scripting Interpreter: PowerShell | T1059.001 |

---

# Findings

The hunt successfully identified PowerShell execution on the Windows endpoint. Sysmon generated process creation events, and Wazuh collected the telemetry for investigation. The captured event contained valuable information, including the executed process, command line, user account, and execution time.

---

# Recommendations

- Monitor all PowerShell execution events.
- Investigate encoded or obfuscated PowerShell commands.
- Create detection rules for suspicious PowerShell usage.
- Correlate PowerShell events with other endpoint activities for improved threat detection.

---

# Screenshots

The following screenshots are included in this hunt:

- Windows PowerShell
- Executed Commands
- Wazuh Hunt Query
- Wazuh Event Details
- Sysmon Event (if available)

---

# Conclusion

This hunt demonstrated how PowerShell activity can be detected using Sysmon and analyzed through Wazuh. Even simple PowerShell execution provides valuable telemetry for security monitoring. In future hunts, more advanced PowerShell techniques, including Atomic Red Team simulations, will be used to emulate real-world attacker behavior and further enhance detection capabilities.