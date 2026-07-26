# T1087 – Account Discovery Incident Response

## Executive Summary

During the Enterprise SOC Purple Team Lab, account enumeration activity was intentionally simulated to evaluate the organization's ability to detect reconnaissance techniques commonly used by threat actors after gaining initial access.

The generated security alert was successfully collected by Wazuh and analyzed by the Security Operations Center (SOC). The purpose of this investigation was to determine whether the observed account discovery activity represented legitimate administrative behavior or a potential reconnaissance attempt preceding privilege escalation, credential theft, or lateral movement.

The investigation confirmed that the activity originated from the authorized laboratory environment and was executed solely for detection validation purposes.

---

# Incident Classification

| Field | Value |
|--------|-------|
| Incident Category | Account Discovery |
| MITRE ATT&CK | T1087 |
| MITRE Tactic | Discovery |
| Severity | Medium |
| Detection Source | Wazuh + Sysmon |
| Status | Confirmed Laboratory Simulation |

---

# Incident Description

Threat actors frequently perform account discovery immediately after obtaining access to a system. Their objective is to identify local users, privileged accounts, service accounts, and administrative users that can later be targeted for credential theft or privilege escalation.

Within this Purple Team exercise, account enumeration commands were executed to simulate attacker reconnaissance and validate endpoint visibility.

---

# Detection Summary

The activity generated security events that were successfully collected and analyzed by Wazuh.

The generated logs contained valuable endpoint telemetry including:

- Username
- Process Name
- Hostname
- Timestamp
- Rule ID
- Event Details
- MITRE ATT&CK Mapping

The available telemetry allowed SOC analysts to reconstruct the activity and determine that account discovery had occurred.

---

# Initial Triage

The assigned SOC analyst performed the following verification steps:

- Reviewed the generated Wazuh alert.
- Verified the affected endpoint.
- Identified the executing user account.
- Reviewed the associated process information.
- Confirmed the execution timeline.
- Checked for additional suspicious activities occurring immediately before or after the event.

No indicators suggested unauthorized compromise.

---

# Impact Assessment

The investigation determined that the activity posed no operational risk because it occurred entirely within the controlled Purple Team laboratory.

However, if similar activity were detected within a production enterprise environment, it could indicate that an attacker is actively performing internal reconnaissance before attempting credential attacks or privilege escalation.

Early detection of discovery techniques significantly improves incident response effectiveness.

---

# Containment

If this activity were observed in a production environment, the following actions should be considered:

- Verify whether the executing user is authorized.
- Review recent authentication activity.
- Increase monitoring on the affected endpoint.
- Investigate additional reconnaissance techniques.
- Restrict unnecessary administrative access if required.

---

# Eradication

If malicious intent is confirmed:

- Remove unauthorized accounts.
- Disable compromised credentials.
- Eliminate attacker persistence mechanisms.
- Perform endpoint malware scanning.
- Review scheduled tasks and startup entries.

---

# Recovery

Following containment and eradication:

- Restore normal monitoring operations.
- Validate endpoint integrity.
- Reset compromised credentials if necessary.
- Continue monitoring for recurring reconnaissance activity.

---

# Indicators of Compromise (IOCs)

During this investigation, analysts reviewed the following indicators:

- Suspicious account enumeration commands
- Unknown user activity
- Abnormal process execution
- Unexpected administrative account usage
- Repeated discovery behavior
- Correlated endpoint telemetry

---

# Lessons Learned

Account Discovery is one of the earliest phases of the cyber attack lifecycle.

Although this activity alone may appear harmless, it often provides attackers with valuable information that enables privilege escalation, credential theft, persistence, and lateral movement.

Continuous monitoring of reconnaissance techniques significantly increases an organization's ability to detect attacks before critical systems become compromised.

---

# Recommendations

To strengthen enterprise security, the following recommendations are advised:

- Monitor all account enumeration activities.
- Correlate discovery events with authentication logs.
- Review abnormal administrative account usage.
- Enable comprehensive Sysmon logging.
- Perform regular threat hunting for reconnaissance behavior.
- Validate all MITRE ATT&CK mappings during investigations.

---

# Incident Response Outcome

The investigation confirmed that Wazuh successfully detected the simulated account discovery activity and generated sufficient forensic evidence for incident analysis.

The collected telemetry enabled analysts to identify the affected endpoint, review execution details, validate the MITRE ATT&CK mapping, and determine that the observed activity was part of an authorized Purple Team exercise.

---

# Conclusion

The successful detection and investigation of MITRE ATT&CK Technique T1087 demonstrated the effectiveness of the Enterprise SOC monitoring environment.

The exercise highlighted the importance of identifying reconnaissance activities at an early stage, allowing defenders to interrupt the cyber attack lifecycle before attackers progress to credential theft, persistence, or lateral movement.

This incident response exercise further validated the organization's ability to investigate discovery-related alerts using Wazuh, Sysmon, and structured SOC investigation procedures.