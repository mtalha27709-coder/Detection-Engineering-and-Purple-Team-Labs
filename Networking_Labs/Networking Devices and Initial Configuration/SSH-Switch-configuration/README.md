# 🔐 Packet Tracer - Configure SSH on Switch



## 📌 Overview


This project demonstrates how to secure remote access to a network switch by replacing Telnet with SSH. It includes password encryption, RSA key generation, and secure user authentication.



---



## 🎯 Objectives


- Secure device passwords
- Encrypt remote communication using SSH
- Disable insecure Telnet access
- Verify SSH implementation



---



## 🖥️ Network Topology



| Device | Interface | IP Address   | Subnet Mask     |
|--------|----------|-------------|-----------------|
| S1     | VLAN 1   | 10.10.10.2  | 255.255.255.0   |
| PC1    | NIC      | 10.10.10.10 | 255.255.255.0   |



---



## 🛠️ Configuration Steps



### 🔹 Part 1: Secure Passwords


- Accessed switch via Telnet
- Entered privileged EXEC mode
- Saved configuration:copy running-config startup-config
-  Enabled password encryption:service password-encryption


---



### 🔹 Part 2: Enable SSH



#### ✅ Configure Domain Name

ip domain-name netacad.pka


#### ✅ Generate RSA Keys


crypto key generate rsa

- Key size: **1024 bits**

#### ✅ Create Local User
username administrator secret cisco


#### ✅ Configure VTY Lines


line vty 0 15
login local
transport input ssh
no password cisco


---

### 🔹 Part 3: Verification

- Telnet access ❌ (disabled)
- SSH access ✅ (secure login)
- Verified encrypted communication
- Saved final configuration

---

## 🔐 Key Skills Gained
- SSH configuration on Cisco devices
- Password encryption & security
- Remote access hardening
- CLI-based network management
- Understanding secure vs insecure protocols

---

## ⚠️ Key Learning


Telnet sends data in plain text, making it vulnerable to attacks. SSH provides encrypted communication, making it essential for secure network management.



---



## 🧠 Tools Used


- Cisco Packet Tracer


---

## 🚀 Future Improvements


- Configure SSH version 2 explicitly
- Implement ACLs for restricted access
- Add multi-device secure network setup

- 

---


## 🙌 Author

Muhammad Talha  
Aspiring Cybersecurity & Network Professional 🚀
