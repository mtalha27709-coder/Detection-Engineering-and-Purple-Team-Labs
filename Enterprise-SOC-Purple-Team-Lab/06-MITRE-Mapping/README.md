# MITRE ATT&CK Mapping

## Overview

The MITRE ATT&CK Mapping phase is one of the most important components of the Enterprise SOC Purple Team Lab. During this phase, all simulated attacks performed throughout the project were analyzed and mapped against the MITRE ATT&CK Framework.

Rather than viewing security alerts as isolated events, the MITRE ATT&CK Framework allows defenders to understand attacker behavior in a structured manner by categorizing techniques based on tactics such as Execution, Discovery, Credential Access, Lateral Movement, and Command and Control.

Throughout this Purple Team project, Wazuh successfully generated security alerts for multiple attack simulations. Each alert was reviewed from a Security Operations Center (SOC) perspective, and the associated MITRE ATT&CK Technique IDs were validated and documented.

This documentation demonstrates how endpoint telemetry collected by Sysmon and processed by Wazuh can be correlated with real-world adversary behaviors, providing analysts with valuable context during threat hunting and incident response.

---

# Objectives

The objectives of this phase include:

- Map every detected attack to the MITRE ATT&CK Framework.
- Understand attacker tactics and techniques.
- Validate Wazuh-generated MITRE mappings.
- Improve SOC investigation and threat hunting capabilities.
- Provide standardized documentation for security incidents.
- Demonstrate enterprise-level security monitoring.

---

# Techniques Covered

The following MITRE ATT&CK techniques were successfully documented during this project:

- T1059 – Command and Scripting Interpreter
- T1087 – Account Discovery
- T1105 – Ingress Tool Transfer
- T1110 – Brute Force
- T1570 – Lateral Tool Transfer

Each technique has been documented separately with its objective, detection method, security impact, and SOC analysis.

---

# Mapping Methodology

Each detected alert was reviewed using the following investigation process:

1. Execute the attack simulation.
2. Observe generated alerts in Wazuh.
3. Review Sysmon or Windows Security Logs.
4. Identify the associated MITRE ATT&CK Technique.
5. Validate the detection.
6. Document findings and recommendations.

---

# Conclusion

The MITRE ATT&CK Mapping phase provided a standardized approach for understanding attacker behavior within the Purple Team laboratory. By correlating security events with the MITRE ATT&CK Framework, SOC analysts gain better visibility into attack progression, improve investigation accuracy, and strengthen overall detection capabilities.