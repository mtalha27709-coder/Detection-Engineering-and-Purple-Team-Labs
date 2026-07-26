# Hunt 04 – System Information Discovery

## Objective

The objective of this hunt was to identify attempts to collect system information from a Windows endpoint. Adversaries commonly gather operating system details, hostnames, architecture, and version information during the reconnaissance phase before moving to later stages of an attack.

---

## Hunt Hypothesis

An attacker may execute Windows built-in commands to enumerate system information. These commands generate process creation events that can be detected using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 1 (Process Creation)
- Detection Platform: Wazuh Dashboard

---

## Attack Simulation

The following Windows commands were executed to simulate system discovery activity.

```cmd
systeminfo
```

```cmd
hostname
```

```cmd
ver
```

```cmd
echo %PROCESSOR_ARCHITECTURE%
```

```cmd
wmic os get Caption,Version
```

---

## Wazuh Hunt Queries

The following queries were used to identify the activity.

```text
data.win.eventdata.commandLine:*systeminfo*
```

```text
data.win.eventdata.commandLine:*hostname*
```

```text
data.win.eventdata.commandLine:*wmic os*
```

```text
systeminfo
```

```text
hostname
```

---

## Investigation Process

The generated Sysmon logs were analyzed in Wazuh.

The investigation focused on:

- Process Name
- Command Line
- Parent Process
- User Account
- Process Creation Time
- Sysmon Event ID

---

## Evidence Collected

The following artifacts were successfully observed during the investigation.

- Windows command execution
- Process creation events
- User account information
- Parent process relationship
- Execution timestamp
- Command-line arguments

---

## Detection Analysis

The executed system discovery commands generated Sysmon Event ID 1 logs, which were forwarded to Wazuh for analysis.

Key observations:

- Windows native discovery commands were successfully recorded.
- Full command-line arguments were available.
- Parent-child process relationships were visible.
- The execution timeline could be reconstructed from Wazuh logs.

---

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Discovery | System Information Discovery | T1082 |

---

## Detection Outcome

| Item | Status |
|------|--------|
| Attack Executed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1082 |

---

## Conclusion

This hunt demonstrated how attackers can use legitimate Windows commands to gather information about a target system during the reconnaissance phase. Using Sysmon process creation logs and Wazuh, the activity was successfully detected and investigated. Monitoring system discovery commands is an important part of proactive threat hunting because these techniques are commonly used before privilege escalation, lateral movement, and persistence activities.