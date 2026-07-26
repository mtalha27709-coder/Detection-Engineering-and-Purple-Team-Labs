# 01 - Lab Setup

## Overview

The **Lab Setup** phase establishes the foundation for the Purple Team Detection Engineering Lab. This environment simulates an enterprise security architecture where attacks are executed from an attacker machine, monitored on a Windows endpoint, and detected through a centralized Wazuh server.

Rather than focusing on installation procedures, this section documents the completed lab environment, machine roles, network topology, and communication flow. The goal is to ensure that all systems are correctly configured before beginning Detection Engineering activities.

---

# Lab Objectives

- Document the lab architecture
- Verify communication between all machines
- Identify the role of each system
- Confirm endpoint logging and monitoring
- Prepare the environment for Detection Engineering

---

# Lab Components

## Ubuntu Server (Detection Engineering Workstation)

The Ubuntu server serves as the central Detection Engineering platform.

### Installed Components

- Wazuh Manager
- Wazuh Dashboard
- Wazuh Indexer
- Custom Wazuh Rules
- Detection Engineering Workspace

### Responsibilities

- Receive endpoint logs
- Process security events
- Execute custom detection rules
- Generate security alerts
- Support MITRE ATT&CK mapping
- Perform detection tuning

---

## Windows 10 (Victim Machine)

The Windows endpoint represents a monitored enterprise workstation.

### Installed Components

- Sysmon
- Wazuh Agent
- Atomic Red Team

### Responsibilities

- Generate Windows security events
- Produce Sysmon telemetry
- Execute Atomic Red Team simulations
- Forward logs to the Wazuh server

---

## Kali Linux (Attack Machine)

Kali Linux is used to simulate offensive security activities.

### Tools

- Nmap
- Hydra
- Metasploit
- CrackMapExec
- Evil-WinRM
- Impacket
- BloodHound
- NetExec
- Other penetration testing utilities

### Responsibilities

- Execute attacks
- Generate realistic security events
- Validate detection capabilities

---

# Detection Workflow

Attack Simulation

?

Windows Endpoint

?

Sysmon Event Logs

?

Wazuh Agent

?

Wazuh Manager

?

Custom Detection Rules

?

Security Alerts

?

Detection Tuning

?

MITRE ATT&CK Mapping

?

Validation

---

# Network Architecture

```
                 Kali Linux
              (Attack Machine)
                     ?
                     ?
               Attack Traffic
                     ?
                     ?
             Windows 10 Endpoint
      Sysmon + Wazuh Agent + ART
                     ?
            Windows Event Logs
                     ?
                     ?
          Ubuntu Wazuh Server
     Wazuh Manager + Dashboard
     Detection Engineering
```

---

# Machine Roles

| Machine | Role |
|---------|------|
| Kali Linux | Attack Simulation |
| Windows 10 | Log Generation |
| Ubuntu Server | Detection Engineering |

---

# Communication Flow

| Source | Destination | Purpose |
|---------|-------------|----------|
| Kali | Windows | Execute attacks |
| Windows | Ubuntu | Forward security logs |
| Ubuntu | Dashboard | Visualize detections |

---

# Expected Outcome

After completing the lab setup:

- All virtual machines are operational.
- Network connectivity is verified.
- Wazuh Agent successfully communicates with the Wazuh Manager.
- Sysmon telemetry is available for monitoring.
- The Detection Engineering environment is ready for rule development, attack simulations, and validation.

---

# Conclusion

The lab environment provides a realistic enterprise architecture for Detection Engineering. By separating attack generation, endpoint telemetry, and centralized detection, the environment closely reflects real-world Security Operations Center (SOC) workflows. This foundation will be used throughout the project to develop, test, tune, and validate custom detections using Wazuh, Sysmon, Sigma, and YARA.