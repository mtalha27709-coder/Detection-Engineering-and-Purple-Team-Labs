# T1059 - Command and Scripting Interpreter

## Objective

The objective of this simulation was to emulate command execution on a Windows 10 endpoint and verify that Sysmon and Wazuh successfully detect, collect, and monitor the generated events.

---

## MITRE ATT&CK

| Technique ID | Technique | Tactic |
|--------------|-----------|---------|
| T1059 | Command and Scripting Interpreter | Execution |

---

## Lab Environment

| Component | Description |
|-----------|-------------|
| SIEM | Wazuh |
| Endpoint | Windows 10 |
| Domain Controller | Windows Server 2022 |
| Logging | Sysmon |
| Platform | VMware Workstation |

---

## Attack Simulation

The following commands were executed on the Windows 10 endpoint to generate process creation events.

```cmd
whoami
hostname
ipconfig /all
systeminfo
net user
tasklist
netstat -ano
route print
```

PowerShell commands:

```powershell
Get-Process
Get-Service
Get-ChildItem C:\
```

---

## Detection

Initially, process creation events were not visible in Wazuh.

Further investigation confirmed that:

- Sysmon was successfully generating Event ID 1 (Process Creation).
- The Wazuh Agent configuration did not include the Sysmon Operational Event Channel.

The following configuration was added to the Wazuh Agent:

```xml
<localfile>
  <location>Microsoft-Windows-Sysmon/Operational</location>
  <log_format>eventchannel</log_format>
</localfile>
```

After updating the configuration, the Wazuh Agent was restarted.

---

## Validation

After restarting the agent:

- Process Creation events were successfully forwarded.
- Wazuh detected Sysmon logs.
- Commands executed on the endpoint became visible in Threat Hunting.
- Security events were successfully collected for monitoring.

---

## Investigation

The collected events included:

- Process Name
- Command Line
- User
- Parent Process
- Event Time
- Agent Name
- Rule Information

These details allow security analysts to investigate command execution activities performed on the endpoint.

---

## Result

The attack simulation was successfully completed.

Sysmon generated Process Creation (Event ID 1) logs, and Wazuh successfully collected and displayed these events after enabling the Sysmon Operational log channel.

The environment is now ready for advanced Purple Team attack simulations and threat detection.

---

## Screenshots

- CMD Command Execution
- PowerShell Execution
- Sysmon Event ID 1
- Wazuh Threat Hunting
- Sysmon Detection in Wazuh
- Event Details
- Rule Details
- MITRE ATT&CK View