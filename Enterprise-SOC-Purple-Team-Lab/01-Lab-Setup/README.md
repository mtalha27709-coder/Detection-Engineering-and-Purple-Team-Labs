# 01 - Lab Setup

## Objective

The objective of this phase is to build a complete enterprise lab environment for Purple Team operations. The lab consists of an Active Directory infrastructure, Windows client machine, Wazuh SIEM, and Kali Linux to simulate real-world cyber attacks and defensive monitoring.

## Lab Components

- Windows Server 2022 (Domain Controller)
- Active Directory Domain Services (AD DS)
- Windows 10 Client
- Wazuh Manager
- Wazuh Agent
- Kali Linux (Attacker)

## Lab Setup Steps

1. Download Windows Server 2022 ISO
2. Install Windows Server
3. Configure Static IP Address
4. Install Active Directory Domain Services
5. Promote Server to Domain Controller
6. Create Domain Users
7. Install Windows 10
8. Join Windows 10 to the Domain
9. Install and Configure Wazuh Manager & Agent

## Outcome

The enterprise lab was successfully deployed. The Domain Controller is operational, the Windows client has joined the domain, and Wazuh is successfully collecting endpoint logs. The environment is now ready for Purple Team attack simulations.