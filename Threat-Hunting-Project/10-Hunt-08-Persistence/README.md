# Hunt 08 – Persistence

## Objective

The objective of this hunt was to identify persistence techniques used by attackers to maintain access on a compromised Windows system. This hunt focused on monitoring **Scheduled Tasks** and **Registry Run Keys**, two common persistence mechanisms frequently abused by adversaries.

---

## Hunt Hypothesis

An attacker may establish persistence by creating scheduled tasks or modifying Windows Registry Run Keys. These actions generate process creation and registry modification events that can be detected using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source:
  - Sysmon Event ID 1 (Process Creation)
  - Sysmon Event ID 13 (Registry Value Set)
- Detection Platform: Wazuh Dashboard

---

# Attack Simulation

## 1. Scheduled Task Creation

The following command was executed to simulate persistence through Task Scheduler.

```cmd
schtasks /Create /SC ONCE /TN TestTask /TR "cmd.exe" /ST 23:59
```

Cleanup:

```cmd
schtasks /Delete /TN TestTask /F
```

---

## 2. Registry Run Key Persistence

The following command was executed to simulate registry-based persistence.

```cmd
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v TestPersistence /t REG_SZ /d "notepad.exe" /f
```

Cleanup:

```cmd
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v TestPersistence /f
```

---

# Wazuh Hunt Queries

## Scheduled Task

```text
data.win.eventdata.image:*schtasks.exe
```

```text
data.win.eventdata.commandLine:*schtasks*
```

---

## Registry Persistence

```text
data.win.system.eventID:13
```

```text
registry
```

```text
Run
```

---

## MITRE Queries

```text
rule.mitre.id:T1053.005
```

```text
rule.mitre.id:T1547.001
```

---

## Generic Hunt

```text
data.win.system.eventID:1
```

---

# Investigation Process

The generated Sysmon logs were analyzed in Wazuh.

The investigation focused on:

- Process Name
- Command Line
- Parent Process
- User Account
- Registry Path
- Registry Value
- Process Creation Time
- Sysmon Event ID
- MITRE ATT&CK Mapping

---

# Evidence Collected

The following artifacts were successfully identified.

### Scheduled Task

- schtasks.exe execution
- Task creation command
- Parent process
- User account
- Process creation timestamp

### Registry Persistence

- Registry Run Key modification
- Registry path
- Registry value
- User account
- Registry event timestamp

---

# Detection Analysis

Sysmon successfully recorded both process creation and registry modification events. Wazuh received the logs and enabled investigation of persistence-related activity.

Key observations:

- Scheduled Task creation was detected.
- Registry Run Key modification was captured.
- Command-line arguments were available.
- Parent-child process relationships were visible.
- Registry changes could be correlated with process execution.

---

# MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Persistence | Scheduled Task | T1053.005 |
| Persistence | Registry Run Keys / Startup Folder | T1547.001 |

---

# Detection Outcome

| Item | Status |
|------|--------|
| Scheduled Task Created | ? Yes |
| Registry Run Key Modified | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Techniques Mapped | ? T1053.005 / T1547.001 |

---

# Conclusion

This hunt demonstrated two of the most common persistence mechanisms used by attackers in Windows environments: **Scheduled Tasks** and **Registry Run Keys**. Both techniques generated telemetry through Sysmon that was successfully ingested into Wazuh, allowing detailed investigation of process execution and registry modifications. Monitoring these persistence techniques helps SOC analysts detect attackers attempting to maintain long-term access to compromised systems and strengthens an organization's detection engineering capabilities.