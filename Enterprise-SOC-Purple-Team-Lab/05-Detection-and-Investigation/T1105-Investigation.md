# T1105 - Ingress Tool Transfer Investigation

## Executive Summary

During the Purple Team exercise, a simulated tool transfer activity was observed and detected by Wazuh. The generated security alert was mapped to MITRE ATT&CK Technique **T1105 – Ingress Tool Transfer**, which is commonly associated with adversaries transferring tools, payloads, or malicious files to a compromised system after gaining initial access.

The objective of this investigation was to validate Wazuh's ability to detect suspicious file transfer or executable creation activities and to analyze the generated security telemetry from a SOC analyst's perspective.

The investigation included reviewing process execution details, file creation events, affected endpoints, timestamps, and the corresponding MITRE ATT&CK mapping. The collected evidence confirmed that the monitoring infrastructure successfully captured the activity and provided sufficient forensic artifacts for further investigation.

---

# Alert Information

| Field | Value |
|--------|-------|
| Technique ID | T1105 |
| Technique Name | Ingress Tool Transfer |
| MITRE Tactic | Command and Control |
| Detection Source | Sysmon + Wazuh |
| Platform | Windows 10 |
| Severity | High |
| Status | Successfully Detected |

---

# Investigation Objective

The primary objective of this investigation was to determine whether executable transfer or payload-related activity could be identified by Wazuh and whether sufficient telemetry was available for incident investigation.

The investigation also aimed to verify the integrity of the collected event logs and evaluate the effectiveness of endpoint monitoring within the enterprise lab environment.

---

# Detection Analysis

Following the simulated activity, Wazuh generated an alert indicating executable or tool-related file creation. The alert included detailed endpoint telemetry collected through Sysmon, allowing analysts to review the complete execution timeline.

The investigation focused on identifying the originating process, affected file path, user context, execution timestamp, and the MITRE ATT&CK technique assigned by Wazuh.

The generated logs demonstrated that endpoint monitoring was functioning correctly and that file transfer-related activities could be detected and centrally monitored.

---

# Evidence Reviewed

The following security artifacts were examined during the investigation:

- Alert Description
- Rule ID
- MITRE ATT&CK Technique
- Process Name
- Process ID
- User Account
- File Path
- Event ID
- Timestamp
- Hostname
- Severity Level

---

# Analyst Findings

The investigation confirmed that the observed activity was generated intentionally within the Purple Team laboratory for detection validation purposes.

No evidence of unauthorized compromise was identified during the investigation. The generated alert demonstrated that Wazuh successfully detected the simulated activity and provided analysts with sufficient forensic information to validate the event.

The collected telemetry confirmed that the monitoring solution was capable of identifying executable-related activities and forwarding detailed logs for centralized analysis.

---

# Risk Assessment

Ingress Tool Transfer is a commonly used adversary technique for delivering additional tools or payloads to a compromised system.

If left undetected, attackers may introduce credential dumping utilities, remote administration tools, persistence mechanisms, or ransomware payloads into the environment.

Continuous monitoring of file creation and executable transfer activities is essential for identifying attacker behavior before additional stages of the attack lifecycle are executed.

---

# Recommendations

- Monitor executable creation events across all endpoints.
- Investigate unexpected file transfers to critical directories.
- Correlate file creation events with process execution logs.
- Validate digital signatures of newly introduced executables.
- Continuously review MITRE ATT&CK mappings for newly generated alerts.
- Maintain centralized endpoint logging for rapid incident response.

---

# Investigation Outcome

The investigation successfully confirmed that Wazuh detected the simulated activity and generated sufficient security telemetry for SOC investigation.

Analysts were able to review the generated alert, validate the associated MITRE ATT&CK technique, and analyze the event using centralized logging within the Wazuh Dashboard.

---

# Conclusion

The Purple Team exercise successfully demonstrated the capability of Wazuh and Sysmon to detect executable transfer-related activities within the monitored environment.

The investigation validated that detailed endpoint telemetry, process information, and file creation events were successfully collected, allowing SOC analysts to perform effective incident analysis and improve organizational visibility against post-compromise attacker techniques.