import type { ValidatorResult } from "../types";

export function phoneNumber(value: any): ValidatorResult {
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isPhoneNumber",
        message: " Value must be a valid E.164 phone number",
        code: "INVALID-NUMBER",
      },
    };
  }
  const phoneRegex = /^\+[1-9]\d{7,14}$/;
  if (!phoneRegex.test(value)) {
    return {
      valid: false,
      error: {
        rule: "isPhoneNumber",
        message: "Value must be a valid E.164 phone number",
        code: "INVALID_PHONE_NUMBER",
      },
    };
  }
  return {
    valid: true,
    error: null,
  };
}
