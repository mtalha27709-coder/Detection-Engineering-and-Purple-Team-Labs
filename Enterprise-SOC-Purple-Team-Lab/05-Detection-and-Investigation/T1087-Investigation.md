# T1087 - Account Discovery Investigation

## Executive Summary

As part of the Enterprise SOC Purple Team Lab, an Account Discovery attack was simulated to evaluate the organization's ability to detect reconnaissance activities performed by an attacker after gaining initial access. The purpose of this technique was to enumerate user accounts available on the target system and determine whether Wazuh could successfully detect and log the activity.

During the simulation, Wazuh generated security events that were analyzed from a Security Operations Center (SOC) perspective. The investigation focused on validating the generated alert, reviewing the collected telemetry, and understanding the potential security impact of account enumeration.

---

# Alert Information

| Field | Value |
|--------|-------|
| Technique ID | T1087 |
| Technique Name | Account Discovery |
| MITRE Tactic | Discovery |
| Detection Source | Wazuh + Sysmon |
| Platform | Windows 10 |
| Severity | Medium |
| Status | Successfully Detected |

---

# Investigation Objective

The objective of this investigation was to determine whether account enumeration activity could be detected by the monitoring infrastructure and whether sufficient forensic evidence was available for incident analysis.

The investigation also aimed to identify the executed process, associated user account, event timestamps, and related MITRE ATT&CK mapping.

---

# Detection Analysis

Following the execution of account discovery commands, Wazuh generated security alerts containing detailed information regarding the observed activity.

The collected logs included process execution details, user context, timestamps, and endpoint information, enabling analysts to verify that account enumeration had taken place successfully within the monitored environment.

The generated telemetry demonstrated that endpoint monitoring was functioning correctly and that discovery-related activities could be investigated using centralized logging.

---

# Evidence Reviewed

During the investigation, the following evidence was analyzed:

- Process Name
- Command Executed
- Username
- Computer Name
- Event ID
- Rule ID
- Alert Description
- Timestamp
- MITRE ATT&CK Technique
- Severity Level

---

# Analyst Findings

The investigation confirmed that account discovery activity was intentionally executed within the Purple Team laboratory environment.

No evidence of unauthorized access or malicious compromise was identified. The activity was performed solely for detection validation purposes.

The generated alert demonstrated that Wazuh successfully collected the required telemetry, allowing analysts to investigate reconnaissance activities before an attacker progresses to later stages of the attack lifecycle.

---

# Risk Assessment

Account Discovery is considered an important reconnaissance technique used by adversaries after obtaining initial access to a system.

By identifying valid user accounts, attackers can perform password attacks, privilege escalation, persistence, and lateral movement more effectively.

Early detection of discovery activities significantly improves an organization's ability to detect attackers before additional compromise occurs.

---

# Recommendations

- Monitor account enumeration activities across endpoints.
- Correlate discovery events with authentication logs.
- Investigate unexpected user enumeration commands.
- Establish alert baselines for administrative account usage.
- Continuously validate MITRE ATT&CK mappings within the SIEM platform.

---

# Investigation Outcome

The investigation successfully confirmed that Wazuh detected account discovery activity and provided sufficient log data for incident investigation.

The generated alerts enabled analysts to review attacker behavior, verify endpoint telemetry, and assess the overall security impact of the simulated activity.

---

# Conclusion

This investigation demonstrated the effectiveness of Wazuh in detecting account discovery techniques within an enterprise environment. The available telemetry provided valuable visibility into reconnaissance activities, enabling SOC analysts to identify potentially malicious behavior at an early stage of the cyber attack lifecycle.

The successful detection and investigation of this technique further validated the organization's monitoring capabilities and demonstrated the importance of continuous endpoint visibility during threat hunting and incident response operations.