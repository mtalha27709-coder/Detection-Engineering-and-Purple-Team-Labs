# Hunt 06 – Process Discovery

## Objective

The objective of this hunt was to identify attempts to enumerate running processes on a Windows endpoint. Attackers frequently perform process discovery to identify security software, privileged applications, and processes that can be targeted for privilege escalation, credential theft, or defense evasion.

---

## Hunt Hypothesis

An attacker may execute native Windows utilities such as **tasklist**, **wmic**, or PowerShell **Get-Process** to enumerate running processes. These commands generate process creation events that can be monitored using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 1 (Process Creation)
- Detection Platform: Wazuh Dashboard

---

## Attack Simulation

The following Windows commands were executed to simulate process discovery.

```cmd
tasklist
```

```cmd
tasklist /v
```

```cmd
tasklist /svc
```

```cmd
wmic process list brief
```

PowerShell alternative:

```powershell
Get-Process
```

---

## Wazuh Hunt Queries

The following hunt queries were used during the investigation.

```text
data.win.eventdata.commandLine:*tasklist*
```

```text
data.win.eventdata.commandLine:*wmic process*
```

```text
data.win.eventdata.commandLine:*Get-Process*
```

Alternative searches:

```text
tasklist
```

```text
wmic process
```

```text
Get-Process
```

Fallback query:

```text
data.win.system.eventID:1
```

---

## Investigation Process

The generated Sysmon logs were reviewed in Wazuh.

The investigation focused on:

- Process Name
- Command Line
- Parent Process
- User Account
- Process ID
- Execution Time
- Sysmon Event ID

---

## Evidence Collected

The following artifacts were successfully identified.

- Execution of **tasklist.exe**
- Execution of **wmic.exe**
- PowerShell process execution (Get-Process)
- Full command-line arguments
- Parent-child process relationship
- User account information
- Process creation timestamp

---

## Detection Analysis

The process discovery commands generated Sysmon Event ID 1 logs, which were successfully forwarded to Wazuh.

Key observations:

- Native Windows process enumeration commands were executed.
- Complete command-line arguments were captured.
- Parent process information was available.
- The execution timeline could be reconstructed using Wazuh logs.

---

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Discovery | Process Discovery | T1057 |

---

## Detection Outcome

| Item | Status |
|------|--------|
| Attack Executed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1057 |

---

## Conclusion

This hunt demonstrated how attackers enumerate running processes using legitimate Windows utilities to identify security tools, privileged applications, or valuable targets. By monitoring Sysmon process creation events in Wazuh, security analysts can detect reconnaissance activity early in the attack lifecycle and correlate it with subsequent malicious behavior. Continuous monitoring of process discovery commands improves visibility into attacker reconnaissance techniques and strengthens threat hunting capabilities.