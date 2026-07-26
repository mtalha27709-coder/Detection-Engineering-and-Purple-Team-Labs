# MITRE ATT&CK Mapping Report

## Objective

The objective of this phase was to map simulated adversary activities to the MITRE ATT&CK framework.

MITRE ATT&CK mapping provides a standardized way to understand attacker behavior, improve detection coverage, and validate security monitoring capabilities.

During this exercise, Atomic Red Team was used to simulate adversary techniques, while Sysmon and Wazuh were used to collect and analyze endpoint telemetry.

---

# MITRE ATT&CK Mapping Environment

| Component | Description |
|----------|-------------|
| SIEM | Wazuh |
| Endpoint Monitoring | Sysmon |
| Attack Simulation | Atomic Red Team |
| Endpoint | Windows 10 |
| Investigation Platform | Wazuh Dashboard |
| Framework | MITRE ATT&CK |

---

# Mapping Methodology

The following process was used for MITRE technique mapping:

1. Execute Atomic Red Team tests.
2. Collect generated endpoint telemetry.
3. Analyze Sysmon events.
4. Review Wazuh alerts.
5. Identify attacker behavior.
6. Map behavior to MITRE ATT&CK techniques.
7. Document detection coverage.

---

# MITRE ATT&CK Technique Mapping

| Hunt | Activity | MITRE Technique | Technique Name | Detection Source |
|------|----------|----------------|----------------|----------------|
| Hunt 01 | PowerShell Execution | T1059.001 | PowerShell | Sysmon Event ID 1 |
| Hunt 02 | Encoded PowerShell | T1059.001 | PowerShell | Process Command Line |
| Hunt 03 | CertUtil Abuse | T1218.010 | CertUtil | Process Creation |
| Hunt 04 | System Discovery | T1082 | System Information Discovery | Command Execution |
| Hunt 05 | User Discovery | T1087 | Account Discovery | Command Execution |
| Hunt 06 | Process Discovery | T1057 | Process Discovery | Process Activity |
| Hunt 07 | Credential Access | T1003 | OS Credential Dumping | Process Monitoring |
| Hunt 08 | Scheduled Task Persistence | T1053.005 | Scheduled Task/Job | Task Creation Events |
| Hunt 08 | Registry Persistence | T1547.001 | Registry Run Keys / Startup Folder | Registry Events |
| Hunt 09 | File Activity | T1083 | File and Directory Discovery | File Monitoring |
| Hunt 10 | MSHTA Abuse | T1218.005 | Mshta | Process Creation |

---

# Detailed Technique Analysis

---

## T1059.001 – PowerShell

### Description

Attackers commonly abuse PowerShell for execution because it provides powerful scripting capabilities and native Windows integration.

### Observed Activity

- powershell.exe execution
- Command-line arguments captured
- Encoded command execution observed

### Detection Source

- Sysmon Event ID 1
- Wazuh process monitoring

---

## T1218.010 – CertUtil

### Description

CertUtil is a legitimate Windows utility that can be abused by attackers to download files or execute malicious activities.

### Observed Activity

- certutil.exe execution
- Command-line analysis performed

### Detection Source

- Process creation logs
- Command-line telemetry

---

## T1218.005 – Mshta

### Description

Mshta is a Windows utility that attackers may abuse to execute malicious scripts.

### Observed Activity

- mshta.exe execution
- Parent process analysis
- Command-line investigation

### Detection Source

- Sysmon Process Creation Event

---

## T1082 – System Information Discovery

### Description

Attackers collect system information to understand the target environment.

### Observed Commands
systeminfo
hostname
wmic

### Detection Source

- Command execution logs

---

## T1087 – Account Discovery

### Description

Attackers enumerate users and accounts to identify available privileges.

### Observed Commands
whoami
net user
net localgroup


### Detection Source

- Process execution telemetry

---

## T1057 – Process Discovery

### Description

Attackers enumerate running processes to identify security software, services, or valuable applications.

### Observed Commands
tasklist
wmic process
Get-Process

### Detection Source

- Sysmon process telemetry

---

## T1003 – OS Credential Dumping

### Description

Credential dumping techniques attempt to obtain password hashes or authentication material.

### Observed Activity

- Credential access simulation
- Process monitoring performed

### Detection Source

- Endpoint telemetry
- Process analysis

---

## T1053.005 – Scheduled Task Persistence

### Description

Attackers use scheduled tasks to maintain persistence after system restart.

### Observed Activity

- Scheduled task creation
- Task execution monitoring

### Detection Source

- Sysmon events
- Wazuh alerts

---

## T1547.001 – Registry Run Keys / Startup Folder

### Description

Attackers modify registry startup locations to achieve persistence.

### Observed Activity

- Registry Run Key modification

### Detection Source

- Registry monitoring

---

# Detection Coverage Summary

| MITRE Tactic | Techniques Detected |
|-------------|--------------------|
| Execution | T1059.001, T1218.005, T1218.010 |
| Discovery | T1082, T1087, T1057 |
| Credential Access | T1003 |
| Persistence | T1053.005, T1547.001 |

---

# Purple Team Validation

MITRE ATT&CK mapping validated that:

- Simulated adversary behaviors generated endpoint telemetry.
- Wazuh successfully collected security events.
- Sysmon provided detailed visibility.
- Detection opportunities were identified.
- Investigation procedures were documented.

---

# Detection Engineering Improvements

MITRE mapping helps identify areas where additional detections can be developed:

- PowerShell behavioral rules
- LOLBin detection rules
- Registry persistence monitoring
- Discovery activity alerts
- Credential access detections

Example:
Process:
powershell.exe

Condition:
CommandLine contains "-EncodedCommand"

Action:
Generate High Severity Alert


---

# Conclusion

MITRE ATT&CK mapping transformed observed attack activities into structured adversary techniques.

By correlating Atomic Red Team simulations with Sysmon telemetry and Wazuh detection data, this project demonstrated how security teams validate detection coverage and improve SOC monitoring capabilities.

This mapping represents a practical Purple Team workflow where offensive simulations are directly connected with defensive detection engineering.