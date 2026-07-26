# 🔐 Packet Tracer Lab — Verify IPv4 & IPv6 Addressing (Dual-Stack Network)



## 🚀 Overview


This project demonstrates a **real-world dual-stack network implementation** where both IPv4 and IPv6 run simultaneously.

The lab focuses on:
- Verifying IP configurations
- Testing connectivity
- Tracing packet paths across multiple routers



This is a **must-have foundational skill** for networking & cybersecurity roles.



---



## 🌐 Network Topology


The network consists of:

- 🖥️ 2 End Devices (PC1, PC2)
- 📡 3 Routers (R1, R2, R3)
- 🔗 Multiple subnets using IPv4 & IPv6



---



## 🧠 Key Concepts Covered



### 🔹 Dual Stack Networking


- Running **IPv4 + IPv6 together**
- Smooth transition between legacy and modern networks



### 🔹 IPv4 Addressing


- Subnetting
- Default Gateway configuration
- Connectivity verification



### 🔹 IPv6 Addressing


- Global Unicast Addresses
- Link-local addresses (fe80::)
- Prefix-based routing



### 🔹 Network Testing Tools


- `ipconfig /all`
- `ipv6config /all`
- `ping`
- `tracert`



---



## 🛠️ Lab Tasks



### ✅ Part 1: Verify Addressing


- Extract IPv4 & IPv6 details from PC1 & PC2
- Complete Addressing Table
- Validate subnet masks & gateways



---



### ✅ Part 2: Test Connectivity



#### 🔸 IPv4 Testing


- Ping from PC1 → PC2
- Ping from PC2 → PC1



#### 🔸 IPv6 Testing


- Ping using IPv6 addresses
- Ensure dual-stack communication works perfectly



---

### ✅ Part 3: Trace Network Path



#### 🔍 IPv4 Tracing
bash
tracert 10.10.1.20
tracert 2001:db8:1:4::a 

Identify all hops
Map routers and interfaces
Understand packet flow

📊 Sample Addressing (Core Devices)


Device	Interface	IPv4 Address	IPv6 Address
R1	G0/0	10.10.1.97	2001:db8:1:1::1
R2	S0/0/0	10.10.1.5	2001:db8:1:2::1
R3	G0/0	10.10.1.17	2001:db8:1:4::1



💡 What I Learned

✔️ How dual-stack networks actually work
✔️ How to verify IP configurations like a SOC/Network Engineer
✔️ Troubleshooting connectivity issues
✔️ Understanding packet flow using traceroute
✔️ Real-world enterprise networking basics



🛡️ Real-World Impact



In real environments:

Banks & enterprises use dual-stack for transition
SOC Analysts monitor IPv4 + IPv6 traffic
Network Engineers troubleshoot using these exact tools

👉 Without these skills, you can't debug real networks




⚡ Why This Project Matters

This isn't just a lab — it's:

🧠 Foundation for CCNA & Networking
🔐 Base for Cybersecurity (SOC / Blue Team)
🌍 Real-world enterprise skill
🚀 Future Improvements
Add dynamic routing (OSPFv2 / OSPFv3)
Implement ACLs for traffic filtering
Simulate real attack + detection scenarios


---


📌 Author

👨‍💻 Talha — Cybersecurity & Networking Learner
💥 Learning by doing | Building real skills



⭐ Don't Forget

If you found this useful:
👉 Star the repo
👉 Fork it
👉 Try it yourself in Packet Tracer
