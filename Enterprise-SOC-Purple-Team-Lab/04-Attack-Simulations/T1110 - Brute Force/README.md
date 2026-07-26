# T1110 - Brute Force

## Objective

The objective of this simulation was to perform a brute-force authentication attack against the SSH service of the Wazuh Server and verify that authentication failure events were collected and detected by Wazuh.

---

## MITRE ATT&CK

| Technique ID | Technique | Tactic |
|--------------|-----------|--------|
| T1110 | Brute Force | Credential Access |

---

## Lab Environment

| Component | Description |
|-----------|-------------|
| Attacker | Kali Linux |
| Target | Ubuntu Wazuh Server |
| Service | OpenSSH |
| SIEM | Wazuh |

---

## Attack Execution

Hydra was used to perform a brute-force attack against the SSH service.

Example command:

```bash
hydra -l student -P /usr/share/wordlists/rockyou.txt ssh://<Target-IP>
```

The attack generated multiple failed authentication attempts on the target server.

---

## Detection

Wazuh successfully collected SSH authentication events generated during the attack.

Observed information included:

- Failed login attempts
- Source IP address
- Username
- SSH service
- Event timestamp

---

## Investigation

The generated authentication events were reviewed in the Wazuh Dashboard.

The investigation confirmed:

- Multiple failed login attempts
- Source host (Kali Linux)
- Target host (Wazuh Server)
- Username used during the attack

---

## Result

The brute-force simulation successfully generated authentication events that were collected by Wazuh. The SIEM platform provided visibility into the failed login attempts, allowing security analysts to investigate suspicious authentication activity.

---

## Screenshots

- Hydra Attack
- SSH Failed Login Events
- Wazuh Dashboard
- Event Details