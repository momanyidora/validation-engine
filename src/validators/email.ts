import type { ValidatorResult } from "../types";

export function email(value: any): ValidatorResult {
  // ensuring input is string before checking email requirements if its not reject
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isEmail",
        message: "Value must be a valid email address.",
        code: "INVALID_EMAIL",
      },
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // ensure that email has @At-sign
  if (!emailRegex.test(value)) {
    return {
      valid: false,
      error: {
        rule: "isEmail",
        message: "Value must be a valid email address",
        code: "INVALID_EMAIL",
      },
    };
  }

  // return success when email is valid and parseable
  return {
    valid: true,
    error: null,
  };
}
