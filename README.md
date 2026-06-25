# Input Validation Engine

## What This Library Does

This project is a reusable validation library built with TypeScript.

The goal is to make input validation easier and avoid rewriting the same validation logic in different projects.

Instead of returning only `true` or `false`, the library returns a structured result showing:

 If validation passed
 Which rule failed
 Why it failed

Supported validators:

 required
 email
 phoneNumber
 url
 date
 uuid
 password

---

## Installation

bash
npm install


---

## Running Tests

Run TypeScript checks:

bash
npx tsc --noEmit


Run Vitest:

bash
npm test


---

## Basic Usage


import { validate, required, email } from "./src";

const result = validate(
  "student@example.com",
  [required, email]
);

console.log(result);


---

## Available Rules

### required

Fails for:

 null
 undefined
 empty strings
 whitespace-only strings

### email

Checks if a value is a valid email address.

### phoneNumber

Checks if a value follows E.164 format.

Example:   
+254745577878


### url

Checks if a value is a valid HTTP or HTTPS URL.

### date

Checks ISO 8601 dates.

Supported formats:   
YYYY-MM-DD
YYYY-MM-DDTHH:mm:ssZ


### uuid

Checks if a value is a valid UUID.

### password

Password requirements:

 At least 8 characters
 At least 1 uppercase letter
 At least 1 digit
 At least 1 special character

---

## Validation Result Format

Success:


{
  valid: true,
  value: "student@example.com",
  errors: []
}


Failure:


{
  valid: false,
  value: "bad-email",
  errors: [
    {
      rule: "isEmail",
      message: "Value must be a valid email address",
      code: "INVALID_EMAIL"
    }
  ]
}


---

## Using Multiple Rules


validate(
  "student@example.com",
  [required, email]
);


If more than one rule fails, all errors are returned.

---

## Using Coercion


validate(
  "  STUDENT@EXAMPLE.COM  ",
  [email],
  { coerce: true }
);


When coercion is enabled:

 Leading and trailing spaces are removed
 Email addresses are converted to lowercase

Example:   
"  STUDENT@EXAMPLE.COM  "
become:   
"student@example.com"
---

## Examples

Validate an email:


validate("student@example.com", [email]);


Validate a required email:


validate(
  "student@example.com",
  [required, email]
);


Validate a strong password:


validate(
  "Password1!",
  [password]
);


---

## Limitations

 Email validation uses regex and may not cover every valid email format.
 Only HTTP and HTTPS URLs are supported.
 UUID validation supports standard UUID formats only.
 The library focuses on validation and simple coercion.



