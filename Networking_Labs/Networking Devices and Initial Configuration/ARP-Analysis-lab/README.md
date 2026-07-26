# 🔍 Packet Tracer - Examine the ARP Table



## 📌 Overview


This lab focuses on understanding how ARP (Address Resolution Protocol) works within a network. It includes analyzing ARP requests, examining switch MAC address tables, and observing ARP behavior in remote communications using Cisco Packet Tracer simulation mode.



---



## 🎯 Objectives



- Examine how ARP requests are generated and processed
- Analyze how switches handle broadcast traffic
- Observe MAC address learning in switches
- Understand ARP behavior in remote network communication

---



## 🧪 Lab Tasks



### 🔹 Part 1: Examine an ARP Request


- Cleared ARP table using `arp -d`
- Generated ARP request by pinging another device
- Observed:
  - ARP broadcast behavior
  - MAC address resolution process
  - Switch forwarding behavior

---



### 🔹 Part 2: Examine Switch MAC Address Table


- Generated traffic between devices
- Used:
- show mac-address-table
  - Observed how switches dynamically learn MAC addresses
- Identified multiple MAC addresses on single ports

---

### 🔹 Part 3: ARP in Remote Communication


- Pinged a remote network device
- Observed:
- ARP request sent to default gateway instead of destination
- Router handling ARP requests
- Used:
- show arp
- 
---



## 📊 Key Learnings



- ARP is used to map IP addresses to MAC addresses
- ARP requests are broadcast, while replies are unicast
- Switches flood broadcast traffic to all ports (except incoming port)
- MAC address tables are dynamically built based on traffic
- For remote communication, ARP resolves the MAC of the default gateway, not the destination host

---



## 🧾 Addressing Table



| Device        | Interface | MAC Address       | Switch Port |
|--------------|----------|-------------------|------------|
| Router0      | G0/0     | 0001.6458.2501    | G0/1       |
| Router1      | G0/0     | 00E0.F7B1.8901    | G0/1       |
| 10.10.10.2   | Wireless | 0060.2F84.4AB6    | F0/2       |
| 10.10.10.3   | Wireless | 0060.4706.572B    | F0/2       |
| 172.16.31.2  | F0       | 000C.85CC.1DA7    | F0/1       |
| 172.16.31.3  | F0       | 0060.7036.2849    | F0/2       |
| 172.16.31.4  | G0       | 0002.1640.8D75    | F0/3       |

---



## 💡 Conclusion



This lab provided practical insight into how ARP works behind the scenes in both local and remote networking. Understanding ARP is essential for network troubleshooting and cybersecurity analysis, especially in detecting spoofing or unusual traffic behavior.

---



## 🚀 Tools Used



- Cisco Packet Tracer
- CLI Commands (arp, ping, show mac-address-table, show arp)

---



## 👨‍💻 Author

Talha
