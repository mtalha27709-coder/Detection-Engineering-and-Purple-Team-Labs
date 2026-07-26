# 05 - YARA

## Overview

YARA is a pattern-matching tool widely used by malware analysts, threat hunters, and Detection Engineers to identify malicious files based on specific strings, byte patterns, and detection logic. It enables defenders to create custom rules for detecting malware families, suspicious artifacts, and known indicators of compromise (IOCs).

In this project, basic YARA rules were created and tested to understand how pattern-based detection works and how YARA can be used as part of a Detection Engineering workflow.

---

# Objectives

- Understand the purpose of YARA.
- Learn the basic structure of a YARA rule.
- Create custom YARA detection rules.
- Test YARA rules against sample files.
- Validate successful rule matching.

---

# Environment

| Component | Purpose |
|----------|---------|
| Ubuntu | YARA Rule Development |
| YARA | Pattern Matching Engine |
| Test Files | Rule Validation |

---

# YARA Installation

The installed YARA version was verified.

```bash
yara --version
```

---

# Rule 1 – Hello Rule

A simple rule was created to detect the string **"Hello"** inside a text file.

```yara
rule HelloRule
{
    strings:
        $a = "Hello"

    condition:
        $a
}
```

Test file:

```text
Hello Detection Engineer
```

Execution:

```bash
yara hello.yar test.txt
```

Expected Output:

```
HelloRule test.txt
```

---

# Rule 2 – Malware Keyword Detection

A second rule was created to detect common malware-related keywords.

```yara
rule MalwareKeyword
{
    strings:
        $a = "mimikatz"
        $b = "meterpreter"

    condition:
        any of them
}
```

Test file:

```text
mimikatz detected
```

Execution:

```bash
yara malware.yar malware.txt
```

Expected Output:

```
MalwareKeyword malware.txt
```

---

# Rule Structure

A standard YARA rule contains the following components:

- Rule Name
- Strings
- Condition

The **strings** section defines patterns to search for, while the **condition** section specifies the logic required for a successful match.

---

# Detection Workflow

YARA Rule

?

Scan Target File

?

Pattern Match

?

Detection Result

?

Validation

---

# Screenshots

The following screenshots were collected:

- YARA Version
- HelloRule Source Code
- HelloRule Detection Result
- MalwareKeyword Source Code
- MalwareKeyword Detection Result

---

# Key Learning

During this phase, the following concepts were learned:

- YARA syntax
- Rule creation
- String matching
- Pattern-based detection
- Rule validation
- Detection Engineering fundamentals

---

# Conclusion

YARA provides an efficient and flexible method for detecting malicious files through custom pattern-matching rules. By creating and testing multiple YARA rules, this phase demonstrated how Detection Engineers can develop lightweight file detection logic and validate rule effectiveness before deploying them in larger security monitoring environments.