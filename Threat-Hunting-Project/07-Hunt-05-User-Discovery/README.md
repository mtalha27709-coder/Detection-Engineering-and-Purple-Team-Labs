# Hunt 05 – User Discovery

## Objective

The objective of this hunt was to identify attempts to enumerate local and domain user accounts on a Windows system. Attackers commonly perform account discovery to identify privileged users, service accounts, and potential targets for privilege escalation or lateral movement.

---

## Hunt Hypothesis

An attacker may execute built-in Windows commands such as **whoami** and **net user** to gather information about user accounts. These commands generate process creation events that can be monitored using Sysmon and investigated through Wazuh.

---

## Environment

- SIEM: Wazuh
- Endpoint: Windows 10
- Logging: Sysmon
- Event Source: Sysmon Event ID 1 (Process Creation)
- Detection Platform: Wazuh Dashboard

---

## Attack Simulation

The following Windows commands were executed to simulate user discovery activity.

```cmd
whoami
```

```cmd
whoami /all
```

```cmd
net user
```

```cmd
net localgroup
```

```cmd
net user TALHA
```

For Active Directory environments:

```cmd
net user /domain
```

```cmd
net group "Domain Admins" /domain
```

---

## Wazuh Hunt Queries

The following queries were used to investigate the activity.

```text
data.win.eventdata.commandLine:*whoami*
```

```text
data.win.eventdata.commandLine:*net user*
```

```text
data.win.eventdata.commandLine:*net localgroup*
```

```text
data.win.eventdata.commandLine:*whoami /all*
```

Alternative searches:

```text
whoami
```

```text
net user
```

```text
net localgroup
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

The following artifacts were observed during the investigation.

- Execution of **whoami.exe**
- Execution of **net.exe**
- Command-line arguments
- User account information
- Parent-child process relationship
- Execution timestamp

---

## Detection Analysis

The account discovery commands generated Sysmon process creation events, which were successfully forwarded to Wazuh.

Key observations:

- User enumeration commands were recorded.
- Full command-line arguments were available.
- Parent process information was captured.
- The activity timeline was reconstructed using Wazuh logs.

---

## MITRE ATT&CK Mapping

| Tactic | Technique | ID |
|---------|-----------|----|
| Discovery | Account Discovery | T1087 |

---

## Detection Outcome

| Item | Status |
|------|--------|
| Attack Executed | ? Yes |
| Sysmon Logged Activity | ? Yes |
| Wazuh Received Logs | ? Yes |
| Investigation Completed | ? Yes |
| MITRE Technique Mapped | ? T1087 |

---

## Conclusion

This hunt demonstrated how attackers enumerate local and domain user accounts using native Windows utilities. User discovery is a common reconnaissance technique performed before privilege escalation and lateral movement. By monitoring Sysmon process creation events in Wazuh, security analysts can detect account enumeration attempts and investigate suspicious reconnaissance activity at an early stage of an attack.