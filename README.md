# Input Validation Engine

## What This Library Does

This project is a reusable input validation library built with TypeScript.

The goal of the library is to help developers validate user input in a consistent way without rewriting validation logic in every project.

Instead of returning only `true` or `false`, the library returns structured validation results that explain:

* Whether validation passed
* Which rule failed
* Why validation failed
* Error codes that can be used by applications

The library supports multiple validation rules and allows them to be combined together.

---

## Installation

Clone the project:

  bash
git clone <repository-url>
cd validation-engine
  

Install dependencies:

  bash
npm install
  

---

## Running Tests

Run individual test files:

  bash
tsx tests/required.test.ts
tsx tests/email.test.ts
tsx tests/phone.test.ts
tsx tests/url.test.ts
tsx tests/date.test.ts
tsx tests/uuid.test.ts
tsx tests/password.test.ts
tsx tests/validate.test.ts
  

Run TypeScript checks:

  bash
npx tsc --noEmi

---

## Basic Usage

Import the validators and validation engine:ts
import { validate, required, email } from "./src"

Validate a value:


const result = validate("student@example.com", [
  required,
  email,
]);

console.log(result)

Output:


{
  valid: true,
  value: "student@example.com",
  errors: []


---

## Available Rules

### required

Checks that a value exists.

Fails when:

* null
* undefined
* empty string
* whitespace-only string

Example:


required(""

---

### email

Checks whether a value is a valid email address.

Example:


email("student@example.com"

---

### phoneNumber

Validates phone numbers using the E.164 format.

Example:


phoneNumber("+254712345678"

---

### url

Validates URLs using the built-in URL parser.

Supported protocols:

* http://
* https://

Example:


url("https://example.com"

---

### date

Validates ISO 8601 dates.

Supported formats:txt
YYYY-MM-DD
YYYY-MM-DDTHH:mm:ss

Examples:


date("2026-06-19")
date("2026-06-19T10:30:00Z"

---

### uuid

Validates UUID values.

Example:


uuid("550e8400-e29b-41d4-a716-446655440000"

---

### password

Checks password strength.

Requirements:

* Minimum 8 characters
* At least 1 uppercase letter
* At least 1 digit
* At least 1 special character

Example:


password("Password1!"

---

## Validation Result Format

Successful validation:


{
  valid: true,
  value: "student@example.com",
  errors: []
}


Failed validation:


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


### Fields

| Field  | Description                         |
|         |                                    |
| valid  | Indicates whether validation passed |
| value  | Original value that was validated   |
| errors | Array of validation errors          |

Each error contains:


{
  rule: string;
  message: string;
  code: string;
}


---

## Using Multiple Rules

Multiple validators can be applied to a single value.

Example:

ts
validate("student@example.com", [
  required,
  email
]);


Example with multiple failures:

ts
validate("", [
  required,
  email
]);


Output:

ts
{
  valid: false,
  value: "",
  errors: [
    {
      rule: "required",
      message: "Value is required",
      code: "REQUIRED"
    },
    {
      rule: "isEmail",
      message: "Value must be a valid email address",
      code: "INVALID_EMAIL"
    }
  ]
}


---

## Using Coercion

Coercion has not yet been implemented in this sprint.

The planned API is:


validate(value, validators, {
  coerce: true
})

---

## Coercion Decisions

Planned coercion behavior:

### Trim whitespace

Example:
"  student@example.com  

Becomes:
"student@example.com

### Lowercase email addresses

Example:
"STUDENT@EXAMPLE.COM

Becomes:ts
"student@example.com

Coercion will be optional because developers may want to keep the original input unchanged.

---

## Examples

### Validate an Emailts
validate("student@example.com", [
  email
])

### Validate a Required Emailts
validate("student@example.com", [
  required,
  email
])

### Validate a Strong Passwordts
validate("Password1!", [
  password
]);
  

### Validate a Phone Number


validate("+2547454554478", [
  phoneNumber
]);


---

## Known Limitations

 Email validation uses regular expressions and does not cover every valid email format.
    URL validation currently supports only HTTP and HTTPS protocols.
       UUID validation focuses on standard UUID formats.
       Coercion support has not yet been implemented.
       The library currently validates values only and does not transform them.

---

## Project Structure

  txt
validation-engine/
│
├── src/
│   ├── validators/
│   │   ├── required.ts
│   │   ├── email.ts
│   │   ├── phoneNumber.ts
│   │   ├── url.ts
│   │   ├── date.ts
│   │   ├── uuid.ts
│   │   └── password.ts
│   │
│   ├── validate.ts
│   ├── types.ts
│   └── index.ts
│
├── tests/
│
├── README.md
└── package.json


## Why I Chose Structured Validation Results

I chose to return structured objects instead of booleans because applications usually need more information than simply knowing whether validation passed.

For example, a registration form needs to know:

   -Which validation rule failed
   -Why it failed
   -Which error message should be shown to the user

Returning structured results makes the library easier to reuse in real-world applications.
