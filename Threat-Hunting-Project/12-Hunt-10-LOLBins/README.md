# Hunt 10 – LOLBins (MSHTA)

## Objective

The objective of this hunt was to identify the execution of **MSHTA.exe**, a legitimate Microsoft Windows binary that can be abused by attackers to execute malicious scripts or HTA applications. Monitoring LOLBins is an important detection engineering practice because adversaries frequently use trusted Windows binaries to evade security controls.

---

## Hunt Hypothesis

An attacker may abuse **MSHTA.exe** to execute scripts while blending in with legitimate Windows activity. Such executions generate process creation events that can be detected using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 1 (Process Creation)
- Detection Platform: Wazuh Dashboard

---

## Attack Simulation

The following command was executed to simulate LOLBin activity.

```cmd
mshta.exe about:blank
```

Alternative command:

```cmd
mshta vbscript:Execute("close")
```

---

## Wazuh Hunt Queries

```text
data.win.eventdata.image:*mshta.exe
```

```text
data.win.eventdata.commandLine:*mshta*
```

```text
mshta
```

Fallback query:

```text
data.win.system.eventID:1
```

---

## Investigation Process

The generated Sysmon logs were analyzed in Wazuh.

The investigation focused on:

- Process Name
- Command Line
- Parent Process
- User Account
- Execution Time
- Sysmon Event ID

---

## Evidence Collected

The following artifacts were identified.

- MSHTA process execution
- Command-line arguments
- Parent-child process relationship
- User account
- Execution timestamp
- Process creation event

---

## Detection Analysis

Sysmon successfully generated process creation events that were forwarded to Wazuh.

Key observations:

- MSHTA execution was detected.
- Full command-line arguments were available.
- Parent process information was captured.
- The activity timeline could be reconstructed.

---

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Defense Evasion | Signed Binary Proxy Execution: MSHTA | T1218.005 |

---

## Detection Outcome

| Item | Status |
|------|--------|
| Attack Executed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1218.005 |

---

## Conclusion

This hunt demonstrated how attackers can abuse **MSHTA.exe**, a trusted Windows binary, to execute scripts while attempting to evade security controls. Using Sysmon process creation events and Wazuh, the execution of MSHTA was successfully detected, investigated, and mapped to the MITRE ATT&CK framework. Monitoring LOLBins such as MSHTA improves visibility into attacker tradecraft and strengthens endpoint detection capabilities.