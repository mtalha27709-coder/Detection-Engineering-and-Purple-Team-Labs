# 04 - Hunt 02: Encoded PowerShell Execution

## Overview

Attackers frequently use Base64 encoded PowerShell commands to conceal malicious scripts and evade basic detection mechanisms. The `-EncodedCommand` parameter allows PowerShell to execute encoded commands, making it a common technique observed in malware, penetration testing tools, and post-exploitation frameworks.

This hunt focuses on identifying encoded PowerShell execution using Sysmon telemetry collected by Wazuh and mapping the activity to the MITRE ATT&CK framework.

---

# Hunt Objective

Detect and investigate PowerShell commands executed with the `-EncodedCommand` parameter using Sysmon logs and Wazuh.

---

# Hunt Hypothesis

An attacker may execute Base64 encoded PowerShell commands to hide malicious activity from users and security tools. These executions should generate Sysmon Process Creation events that can be identified through proactive threat hunting.

---

# Attack Simulation

The following command was executed on the Windows 10 endpoint:

```powershell
powershell.exe -EncodedCommand SGVsbG8=
```

The encoded string represents a simple test payload used to generate PowerShell execution logs. Although the command itself is harmless, it simulates a technique commonly used by attackers.

---

# Detection

The generated event was collected by the Wazuh Agent and forwarded to the Wazuh Manager for analysis.

Example hunt queries:

```text
data.win.eventdata.commandLine:*EncodedCommand*
```

```text
data.win.eventdata.commandLine:*encoded*
```

```text
data.win.system.eventID:1 AND data.win.eventdata.image:*powershell.exe
```

The investigation confirmed that the encoded PowerShell execution was successfully captured by Sysmon and indexed by Wazuh.

---

# Investigation

The following event attributes were examined during the investigation:

- Process Name
- Parent Process
- Full Command Line
- Username
- Hostname
- Process ID (PID)
- Event ID
- Timestamp

Particular attention was given to the **Command Line** field to verify the presence of the `-EncodedCommand` parameter.

---

# Indicators of Compromise (IOCs)

| IOC | Value |
|------|-------|
| Process | powershell.exe |
| Suspicious Argument | -EncodedCommand |
| Log Source | Sysmon |
| Event ID | 1 (Process Creation) |
| Detection Platform | Wazuh |

---

# MITRE ATT&CK Mapping

| Technique | ID |
|-----------|----|
| Command and Scripting Interpreter: PowerShell | T1059.001 |
| Obfuscated/Compressed Files and Information | T1027 |

---

# Findings

The threat hunt successfully identified the execution of an encoded PowerShell command. Sysmon generated a Process Creation event containing the complete command line, including the `-EncodedCommand` parameter. Wazuh successfully collected and indexed the event, allowing the activity to be investigated through proactive log hunting.

---

# Recommendations

- Monitor all PowerShell executions using the `-EncodedCommand` parameter.
- Generate alerts for encoded or obfuscated PowerShell activity.
- Correlate encoded PowerShell executions with network connections and child processes.
- Regularly review PowerShell logs for suspicious command-line arguments.

---

# Screenshots

The following screenshots are included in this hunt:

- Encoded PowerShell Command Execution
- Wazuh Hunt Query
- Wazuh Event Details
- Command Line Showing `-EncodedCommand`
- Sysmon Process Creation Event (if available)

---

# Conclusion

This hunt demonstrated how encoded PowerShell execution can be proactively identified using Sysmon and Wazuh. The activity generated detailed process creation telemetry, enabling analysts to investigate suspicious command-line arguments and map the behavior to MITRE ATT&CK techniques. Monitoring encoded PowerShell commands is an essential detection strategy, as this technique is commonly used by attackers to evade basic security monitoring.