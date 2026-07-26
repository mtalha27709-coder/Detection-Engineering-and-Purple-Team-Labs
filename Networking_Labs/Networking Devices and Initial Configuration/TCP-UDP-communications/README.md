# 🌐 Packet Tracer – TCP and UDP Communications

## 📌 Overview


This project demonstrates how TCP and UDP protocols work in real-time using Cisco Packet Tracer Simulation Mode. It focuses on analyzing network traffic, understanding multiplexing, and exploring how different application protocols communicate across a network.



---



## 🎯 Objectives



- Generate network traffic using multiple applications
- Analyze TCP and UDP protocol behavior
- Understand multiplexing and port usage
- Observe PDUs (Protocol Data Units) in simulation mode



---



## 🛠️ Tools Used


- Cisco Packet Tracer
- Simulation Mode
- MultiServer & Client PCs



---



## 🔍 What I Did



### 🔹 Part 1: Traffic Generation & Multiplexing


- Generated ARP traffic using broadcast ping
- Simulated:
  - HTTP (Web browsing)
  - FTP (File transfer)
  - DNS (Name resolution)
  - Email (SMTP/POP3)
- Observed how multiple PDUs travel simultaneously across the network
- Analyzed multiplexing (multiple data streams over one connection)



---



### 🔹 Part 2: Protocol Analysis



#### ✅ TCP Analysis (HTTP, FTP, Email)



- Observed:
  - 3-way handshake (SYN, ACK)
  - Sequence & Acknowledgment numbers
  - Reliable communication
- Verified:
  - Port numbers
  - Flags (SYN, ACK, FIN, etc.)



#### ⚡ UDP Analysis (DNS)


- Identified:
  - Connectionless communication
  - No sequence/acknowledgment numbers
- Faster but less reliable than TCP



---



## 🧠 Key Concepts Learned


- Difference between **TCP (reliable)** and **UDP (fast, connectionless)**
- Role of **port numbers** in identifying applications
- **Multiplexing** in network communication
- How real-world protocols (HTTP, FTP, DNS, Email) operate



---



## 💡 Key Takeaways


- TCP ensures data reliability through sequencing and acknowledgments  
- UDP is faster but does not guarantee delivery  
- Multiplexing allows multiple applications to share the same network  
- Packet Tracer simulation helps visualize real network behavior  



---



## 🚀 Why This Project Matters


Understanding TCP/UDP is essential for:
- Networking fundamentals
- Cybersecurity (SOC / Blue Team)
- Traffic analysis & packet inspection



---



## 📂 Project Files


- `.pkt` file (Packet Tracer lab)
- Screenshots (Simulation results)


---

## 🧑‍💻 Author


Talha – Cybersecurity & Networking Learner
