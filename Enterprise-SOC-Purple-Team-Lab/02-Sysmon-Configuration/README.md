# 02 - Sysmon Configuration

## Objective

The objective of this phase was to deploy and configure Sysmon on the Windows 10 endpoint to enhance endpoint visibility and generate detailed telemetry for threat detection and incident investigation.

## Overview

Sysmon (System Monitor) from the Microsoft Sysinternals Suite was installed on the Windows 10 endpoint using a community-recommended configuration file. The generated Sysmon events are collected by the Wazuh Agent and forwarded to the Wazuh Manager for centralized monitoring and analysis.

## Components Used

- Windows 10 Endpoint
- Sysmon (Microsoft Sysinternals)
- Sysmon Configuration (SwiftOnSecurity)
- Wazuh Agent
- Wazuh Manager

## Configuration Steps

### 1. Download Sysmon

Downloaded Sysmon from the Microsoft Sysinternals Suite.

### 2. Download Sysmon Configuration

Downloaded the SwiftOnSecurity Sysmon configuration file (`sysmonconfig-export.xml`) to enable detailed logging.

### 3. Install Sysmon

Installed Sysmon using the custom configuration file.

```cmd
Sysmon64.exe -accepteula -i sysmonconfig-export.xml
```

### 4. Verify Installation

Verified that the Sysmon service was successfully installed and running.

```cmd
sc query Sysmon64
```

### 5. Verify Event Logs

Confirmed that Sysmon Operational logs were being generated in Event Viewer.

```
Applications and Services Logs
??? Microsoft
    ??? Windows
        ??? Sysmon
            ??? Operational
```

### 6. Generate Test Events

Executed simple commands to generate endpoint activity.

```cmd
whoami
ipconfig
notepad.exe
calc.exe
```

### 7. Verify Logs in Wazuh

Confirmed that Windows endpoint logs were successfully forwarded to the Wazuh Manager and appeared in the Threat Hunting dashboard.

## Result

Sysmon was successfully installed and configured on the Windows 10 endpoint. Endpoint events were generated, collected by the Wazuh Agent, and successfully forwarded to the Wazuh Manager. The environment is now ready for Purple Team attack simulations, detection engineering, and MITRE ATT&CK-based investigations.

## Screenshots

- Sysmon Download
- Sysmon Configuration File
- Sysmon Installation
- Sysmon Service Verification
- Event Viewer (Sysmon Operational)
- Test Event Generation
- Wazuh Threat Hunting Dashboard