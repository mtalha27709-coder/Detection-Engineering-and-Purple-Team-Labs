# T1059 - Command and Scripting Interpreter Investigation

## Executive Summary

During the Purple Team exercise, a command execution activity was simulated to evaluate the organization's ability to detect and investigate command-line execution events. The attack was successfully monitored by Wazuh, allowing the Security Operations Center (SOC) analyst to review the generated alert, analyze event details, and validate the associated MITRE ATT&CK mapping.

The objective of this investigation was to determine whether the executed commands represented authorized administrative activity or a potentially malicious action. The collected telemetry from Sysmon and Windows Event Logs provided sufficient visibility into the execution process, enabling a complete investigation.

---

# Alert Information

| Field | Value |
|--------|-------|
| Technique ID | T1059 |
| Technique Name | Command and Scripting Interpreter |
| MITRE Tactic | Execution |
| Detection Source | Sysmon + Wazuh |
| Platform | Windows 10 |
| Severity | Medium / High |
| Status | Successfully Detected |

---

# Investigation Objective

The primary objective of this investigation was to verify whether command-line execution activity could be detected by Wazuh and to determine if the observed behavior represented legitimate administrative actions or malicious execution techniques commonly used by attackers.

---

# Detection Analysis

After executing the simulated commands, Wazuh generated an alert containing detailed process execution information. The collected telemetry included process creation events, execution timestamps, user context, and process paths.

The generated logs confirmed that the command execution activity was successfully captured by Sysmon and forwarded to the Wazuh Manager for analysis.

---

# Evidence Reviewed

During the investigation, the following artifacts were analyzed:

- Process Name
- Parent Process
- Process ID
- User Account
- Hostname
- Event Timestamp
- Event ID
- Rule ID
- Alert Description
- MITRE ATT&CK Mapping

---

# Analyst Findings

The investigation confirmed that command execution activity occurred within the authorized lab environment. No evidence suggested unauthorized access or compromise. The activity was intentionally generated as part of the Purple Team simulation to validate detection capabilities.

The generated alerts demonstrated that endpoint telemetry was successfully collected and processed by Wazuh, providing sufficient information for incident investigation.

---

# Risk Assessment

Although the observed activity was legitimate within the laboratory environment, the same technique is frequently used by threat actors during the initial stages of an attack. Continuous monitoring of command execution events is essential for identifying suspicious behavior before privilege escalation or lateral movement occurs.

---

# Recommendations

- Monitor all command-line execution events.
- Investigate unusual parent-child process relationships.
- Correlate process execution with user activity.
- Validate execution paths against known administrative tools.
- Continuously map detections to the MITRE ATT&CK Framework.

---

# Investigation Outcome

The investigation successfully validated that Wazuh detected the simulated command execution activity and provided sufficient telemetry for SOC analysts to investigate the event.

---

# Conclusion

This investigation demonstrated the effectiveness of Wazuh and Sysmon in monitoring command-line execution within an enterprise environment. The generated alerts provided valuable visibility into process execution activities, enabling analysts to identify potentially malicious behavior while reducing investigation time through centralized log analysis.