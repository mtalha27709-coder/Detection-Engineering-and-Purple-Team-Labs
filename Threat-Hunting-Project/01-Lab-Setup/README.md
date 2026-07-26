# 01 - Lab Setup

## Overview

This section documents the laboratory environment used to perform the Threat Hunting Project. The lab was designed to simulate a small enterprise network where attack activities could be generated, monitored, and investigated using endpoint telemetry collected by Wazuh and Sysmon.

The objective of this environment was to provide realistic Windows event logs that could later be used for proactive threat hunting, IOC extraction, and MITRE ATT&CK mapping.

---

# Lab Architecture

The lab consists of three virtual machines running in an isolated virtual network.

| Machine | Operating System | Purpose |
|----------|------------------|----------|
| Kali Linux | Kali Linux | Attack Machine |
| Windows 10 | Windows 10 | Target Endpoint |
| Ubuntu Server | Ubuntu | Wazuh Manager & Dashboard |

---

# Lab Components

### Kali Linux

Used as the attacker machine to simulate different attack techniques and generate malicious activities against the Windows endpoint.

Functions:

- Attack Simulation
- Network Enumeration
- Remote Access Testing
- Atomic Red Team Support

---

### Windows 10

Windows 10 served as the victim endpoint where all attack simulations were executed.

Installed Components:

- Sysmon
- Wazuh Agent

The endpoint generated Windows Event Logs and Sysmon logs, which were forwarded to the Wazuh Manager for analysis.

---

### Ubuntu Server

Ubuntu hosted the centralized security monitoring platform.

Installed Services:

- Wazuh Manager
- Wazuh Dashboard
- Elasticsearch / Indexer

Responsibilities:

- Collect Logs
- Store Events
- Search Security Events
- Threat Hunting
- Alert Investigation

---

# Logging Pipeline

Attack Activity

?

Windows 10

?

Sysmon

?

Wazuh Agent

?

Wazuh Manager

?

Wazuh Dashboard

?

Threat Hunting & Investigation

---

# Network Configuration

The virtual machines were configured within the same virtual network to allow communication between all systems.

Machine connectivity was verified using IP address validation before beginning attack simulations.

---

# Validation

The following checks were completed before starting the Threat Hunting project.

- Kali Linux operational
- Windows 10 operational
- Ubuntu Server operational
- Wazuh Dashboard accessible
- Wazuh Agent connected
- Sysmon generating logs
- Event collection verified

---

# Screenshots

The following screenshots demonstrate the successful deployment of the lab environment.

- Kali Linux Desktop
- Kali Linux IP Configuration
- Windows 10 Desktop
- Windows 10 IP Configuration
- Ubuntu Desktop
- Ubuntu IP Configuration
- Wazuh Dashboard Home Page

---

# Outcome

The lab environment was successfully deployed and validated.

All systems were communicating correctly, Sysmon was collecting endpoint telemetry, and Wazuh was successfully receiving and indexing logs. This environment served as the foundation for all threat hunting activities performed throughout the project.