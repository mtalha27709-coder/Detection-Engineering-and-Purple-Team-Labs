# T1110 – Brute Force Incident Response

## Executive Summary

During the Enterprise SOC Purple Team Lab, a Brute Force attack simulation was conducted to evaluate the organization's capability to detect repeated authentication failures and respond appropriately to potential credential-based attacks. The attack generated multiple failed login attempts against a monitored Windows endpoint, allowing Wazuh to collect, correlate, and analyze authentication events in real time.

The generated alerts were successfully reviewed by the Security Operations Center (SOC), enabling analysts to identify the attack source, targeted account, authentication method, and associated failure reasons. The objective of this incident response exercise was to validate Wazuh's detection capabilities and demonstrate how a SOC team would respond if similar activity occurred within a production enterprise environment.

---

# Incident Classification

| Field | Value |
|--------|-------|
| Incident Category | Brute Force Attack |
| MITRE ATT&CK Technique | T1110 |
| MITRE ATT&CK Tactic | Credential Access |
| Severity | High |
| Detection Source | Windows Security Logs + Wazuh |
| Status | Confirmed Laboratory Simulation |

---

# Incident Description

Brute Force attacks involve repeated authentication attempts using multiple passwords in an effort to gain unauthorized access to user accounts. Threat actors commonly automate these attacks using specialized tools and target exposed services such as RDP, SSH, VPN portals, web applications, and other authentication mechanisms.

Within this Purple Team exercise, repeated failed login attempts were intentionally generated to simulate a password guessing attack and validate the organization's monitoring and detection capabilities.

---

# Detection Summary

Wazuh successfully detected multiple failed authentication events generated during the simulation.

The collected telemetry included:

- Source IP Address
- Target Username
- Authentication Package
- Logon Type
- Failure Reason
- Windows Event ID 4625
- Timestamp
- Hostname
- Rule ID
- MITRE ATT&CK Mapping

The available evidence enabled analysts to reconstruct the authentication attempts and evaluate the attack.

---

# Initial Triage

The SOC analyst performed the following actions:

- Reviewed failed authentication events.
- Identified the source IP address.
- Verified the targeted user account.
- Confirmed authentication failure reasons.
- Checked for successful login events following the failed attempts.
- Reviewed additional alerts originating from the same host.

The investigation confirmed that the activity was intentionally generated as part of the Purple Team exercise.

---

# Impact Assessment

No user accounts were compromised.

No successful authentication occurred.

No privilege escalation or persistence was observed.

The simulated attack remained isolated within the controlled laboratory environment.

If this activity occurred in production, it could indicate an active password guessing attack that may eventually lead to unauthorized access.

---

# Containment

If observed in a production environment, the following containment actions should be taken:

- Block the attacking IP address.
- Temporarily lock the targeted account.
- Notify the affected user.
- Increase authentication monitoring.
- Preserve authentication logs for forensic analysis.

---

# Eradication

Recommended eradication actions include:

- Reset compromised passwords.
- Remove unauthorized accounts if created.
- Review authentication policies.
- Eliminate any persistence established after compromise.
- Perform a complete endpoint security assessment.

---

# Recovery

After successful containment and eradication:

- Unlock verified user accounts.
- Require password changes.
- Enable Multi-Factor Authentication (MFA).
- Continue monitoring authentication events.
- Validate normal user access.

---

# Indicators of Compromise (IOCs)

The following indicators were reviewed:

- Repeated failed login attempts
- Event ID 4625
- Unknown source IP addresses
- Multiple password failures
- Repeated attempts against a single account
- Authentication anomalies

---

# Lessons Learned

Credential-based attacks remain one of the most common techniques used by adversaries to gain initial access.

Rapid detection of authentication failures enables SOC analysts to identify password attacks before attackers successfully compromise user accounts.

---

# Recommendations

- Enable Multi-Factor Authentication.
- Configure account lockout policies.
- Monitor repeated authentication failures.
- Investigate abnormal login behavior.
- Review authentication logs regularly.
- Correlate failed and successful login events.
- Implement strong password policies.

---

# Incident Response Outcome

The investigation confirmed that Wazuh successfully detected the simulated Brute Force attack and generated comprehensive security telemetry for incident analysis.

The collected logs enabled SOC analysts to identify the attack source, targeted account, authentication failures, and overall attack timeline while confirming that no unauthorized access was achieved.

---

# Conclusion

This incident response exercise demonstrated the effectiveness of Wazuh in detecting and investigating credential-based attacks. Through centralized monitoring and structured incident response procedures, the Security Operations Center successfully analyzed the simulated Brute Force attack and validated the organization's ability to respond to authentication-related threats.