# Detection and Investigation

## Overview

The Detection and Investigation phase focused on analyzing security alerts generated during the Purple Team attack simulations. Every alert collected by Wazuh was reviewed from a SOC analyst's perspective to understand attacker behavior, validate MITRE ATT&CK mappings, identify affected assets, and determine the overall security impact.

Rather than relying only on alert generation, each event was investigated by examining event logs, process information, user activity, timestamps, and rule details. This approach demonstrates how Security Operations Center (SOC) analysts perform incident investigation in a real enterprise environment.

## Investigation Objectives

- Validate attack detection by Wazuh.
- Review generated alerts and rule information.
- Analyze event logs and Sysmon telemetry.
- Verify MITRE ATT&CK mappings.
- Identify affected systems and users.
- Assess the security impact of each simulated attack.
- Document investigation findings.

## Investigated Techniques

- T1059 – Command and Scripting Interpreter
- T1087 – Account Discovery
- T1105 – Ingress Tool Transfer
- T1110 – Brute Force
- T1570 – Lateral Tool Transfer

Each investigation has been documented in a separate report within this directory.