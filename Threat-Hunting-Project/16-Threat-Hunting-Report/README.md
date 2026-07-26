# Threat Hunting Report

## Objective

The objective of this threat hunting exercise was to proactively identify suspicious activities and validate endpoint visibility using Wazuh SIEM and Sysmon telemetry.

Unlike traditional alert-based monitoring, threat hunting focuses on searching for abnormal behaviors, attacker techniques, and hidden indicators that may not trigger existing alerts.

This report documents the threat hunting process performed against simulated adversary activities generated through Atomic Red Team.

---

# Threat Hunting Environment

| Component | Description |
|----------|-------------|
| SIEM | Wazuh |
| Endpoint | Windows 10 |
| Telemetry Source | Sysmon |
| Attack Simulation | Atomic Red Team |
| Investigation Platform | Wazuh Dashboard |
| Framework Used | MITRE ATT&CK |

---

# Threat Hunting Methodology

The following threat hunting lifecycle was followed:

1. Develop hunting hypothesis.
2. Execute controlled attack simulation.
3. Collect endpoint telemetry.
4. Search security events in Wazuh.
5. Analyze suspicious behaviors.
6. Validate findings.
7. Map activities to MITRE ATT&CK.
8. Document detection opportunities.

---

# Hunting Approach

## Hypothesis-Based Hunting

Each hunt started with a security hypothesis:

Example:

> "An attacker may abuse PowerShell to execute malicious commands on a Windows endpoint."

The investigation then searched for supporting evidence within endpoint telemetry.

---

# Hunt 01 – PowerShell Abuse Hunting

## Hunting Hypothesis

Attackers may use PowerShell for command execution, payload execution, or system manipulation.

## Hunting Evidence

Observed:

- powershell.exe execution
- Command-line arguments
- Parent-child process relationship

## Investigation Query Concept

Search for:
Process Name = powershell.exe

and analyze:
CommandLine
ParentProcess
User Account
Timestamp

## Finding

PowerShell execution was successfully identified and investigated.

## MITRE ATT&CK

- T1059.001 – PowerShell

---

# Hunt 02 – Encoded Command Hunting

## Hunting Hypothesis

Attackers may use encoded commands to hide malicious PowerShell activity.

## Hunting Evidence

Observed:
powershell.exe -EncodedCommand

## Investigation Focus

Analyzed:

- Suspicious command parameters
- Process execution chain
- User context

## Finding

Encoded PowerShell activity was detected through command-line visibility.

## MITRE ATT&CK

- T1059.001 – PowerShell

---

# Hunt 03 – LOLBin Abuse Hunting

## Hunting Hypothesis

Attackers may abuse trusted Windows binaries to bypass security controls.

## Investigated LOLBins

### CertUtil

Evidence:
certutil.exe

MITRE:

- T1218.010

---

### MSHTA

Evidence:
mshta.exe

MITRE:

- T1218.005

---

## Finding

Living-off-the-Land Binary abuse was successfully identified through process telemetry.

---

# Hunt 04 – Discovery Activity Hunting

## Hunting Hypothesis

Attackers perform reconnaissance after gaining access to understand the environment.

## Observed Commands

System Discovery:
systeminfo
hostname
wmic

User Discovery:
whoami
net user
net localgroup

Process Discovery:
tasklist
Get-Process

## Finding

Discovery behavior was identified through command execution monitoring.

## MITRE ATT&CK

- T1082 – System Information Discovery
- T1087 – Account Discovery
- T1057 – Process Discovery

---

# Hunt 05 – Persistence Hunting

## Hunting Hypothesis

Attackers may create persistence mechanisms to maintain access.

## Investigated Activities

### Scheduled Tasks

Evidence:

- Task creation events

MITRE:

- T1053.005

---

### Registry Persistence

Evidence:

- Registry Run Key modification

MITRE:

- T1547.001

---

## Finding

Persistence techniques were detected through registry and task monitoring.

---

# Hunt 06 – File Activity Hunting

## Hunting Hypothesis

Attackers may create, modify, or delete files during operations.

## Investigated Activities

- File creation
- File modification
- File deletion
- File movement

## Finding

File system activities were visible through endpoint monitoring.

---

# Threat Hunting Findings Summary

| Hunt Category | Result | Detection Source |
|--------------|--------|----------------|
| PowerShell Abuse | Detected | Sysmon Process Creation |
| Encoded Commands | Detected | Command Line Logs |
| LOLBin Abuse | Detected | Process Telemetry |
| Discovery Activity | Detected | Endpoint Events |
| Persistence | Detected | Registry/Task Events |
| File Activity | Detected | File Monitoring |

---

# Threat Hunting Artifacts Collected

The following artifacts were reviewed:

- Process names
- Command-line arguments
- Parent processes
- User accounts
- File paths
- Registry modifications
- Sysmon Event IDs
- Wazuh alerts
- MITRE ATT&CK techniques

---

# Detection Opportunities Identified

The hunting process identified multiple opportunities for improving detection coverage:

## PowerShell Detection

Create rules for:

- Encoded PowerShell
- Suspicious execution chains
- Unusual PowerShell usage

---

## LOLBin Detection

Monitor:

- certutil.exe
- mshta.exe
- Other signed binary abuse

---

## Persistence Detection

Monitor:

- Registry Run Keys
- Scheduled Tasks
- Startup locations

---

## Discovery Detection

Monitor:

- Account enumeration
- System information gathering
- Process enumeration

---

# Threat Hunting Results

The threat hunting exercise demonstrated that endpoint telemetry from Sysmon combined with Wazuh provides effective visibility into attacker behavior.

The investigation successfully identified:

- Execution techniques
- Discovery activities
- Persistence attempts
- LOLBin abuse
- Suspicious command execution

---

# Conclusion

This threat hunting exercise demonstrated a proactive security monitoring approach where analysts search for adversary behaviors instead of relying only on alerts.

By combining Atomic Red Team simulations, Sysmon telemetry, Wazuh SIEM analysis, and MITRE ATT&CK mapping, this project validated a complete Detection Engineering workflow.

The methodology used in this report can be applied in enterprise SOC environments for:

- Threat hunting
- Detection validation
- Incident investigation
- Security monitoring improvement

