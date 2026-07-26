# T1110 - Brute Force Investigation

## Executive Summary

As part of the Enterprise SOC Purple Team Lab, a Brute Force attack simulation was performed to evaluate the organization's ability to detect repeated authentication failures and identify password guessing attempts against a monitored endpoint.

During the simulation, multiple failed login attempts were intentionally generated from an attacker machine to trigger authentication-related security events. Wazuh successfully collected and analyzed the generated logs, allowing the Security Operations Center (SOC) analyst to investigate the incident using centralized event monitoring.

The objective of this investigation was to validate the effectiveness of Wazuh in detecting authentication failures, reviewing attacker information, identifying the targeted account, and assessing the potential security impact of brute force activity.

---

# Alert Information

| Field | Value |
|--------|-------|
| Technique ID | T1110 |
| Technique Name | Brute Force |
| MITRE Tactic | Credential Access |
| Detection Source | Windows Security Logs + Wazuh |
| Platform | Windows 10 |
| Severity | High |
| Status | Successfully Detected |

---

# Investigation Objective

The primary objective of this investigation was to analyze repeated authentication failures generated during the brute force simulation and determine whether the activity represented an unauthorized password guessing attack.

The investigation also focused on identifying the attacker, reviewing authentication logs, validating the affected user account, and confirming whether the attack resulted in successful authentication.

---

# Detection Analysis

Following the brute force simulation, Wazuh generated multiple authentication failure alerts collected from Windows Security Event Logs.

The generated alerts contained valuable forensic information including the source IP address, target username, authentication package, logon type, event ID, and failure reason.

By reviewing these events, analysts were able to reconstruct the authentication attempts and confirm that multiple invalid login requests were made against the monitored endpoint.

---

# Evidence Reviewed

The following security artifacts were analyzed during the investigation:

- Alert Description
- Rule ID
- Event ID (4625)
- Source IP Address
- Target Username
- Authentication Package
- Logon Type
- Failure Reason
- Status Code
- Sub Status Code
- Timestamp
- Hostname
- Severity Level

---

# Analyst Findings

The investigation confirmed that multiple failed authentication attempts were generated intentionally as part of the Purple Team exercise.

The alerts indicated repeated login failures originating from the attacker system, targeting a monitored user account.

No successful authentication events were observed during the investigation, confirming that the attack was unsuccessful and no unauthorized access was obtained.

The generated telemetry demonstrated that Wazuh successfully detected repeated authentication failures and provided sufficient information for incident investigation.

---

# Risk Assessment

Brute Force attacks remain one of the most common techniques used by attackers to compromise user accounts.

If successful, attackers may gain unauthorized access to enterprise systems, establish persistence, escalate privileges, and move laterally across the environment.

Continuous monitoring of failed authentication events is essential for early detection of password attacks and account compromise attempts.

---

# Recommendations

- Monitor repeated failed authentication attempts.
- Configure account lockout policies.
- Enforce strong password policies.
- Enable Multi-Factor Authentication (MFA).
- Investigate authentication attempts originating from unknown systems.
- Correlate authentication failures with successful login events.
- Continuously monitor Windows Security Event ID 4625.

---

# Investigation Outcome

The investigation successfully validated Wazuh's ability to detect brute force activity through Windows Security Logs.

Security analysts were able to identify the attacker source, targeted account, authentication method, and failure reason using centralized log analysis.

The collected telemetry provided sufficient evidence to investigate the attack and determine that no unauthorized access was achieved.

---

# Conclusion

This investigation demonstrated the effectiveness of Wazuh in detecting brute force attacks within an enterprise environment.

The generated authentication logs provided detailed visibility into failed login attempts, enabling SOC analysts to rapidly identify password guessing attacks, assess the potential impact, and initiate appropriate response procedures.

The successful detection and investigation of this technique further strengthened the organization's ability to identify credential-based attacks during the early stages of the cyber attack lifecycle.