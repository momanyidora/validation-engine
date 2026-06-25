import type { ValidatorResult } from "../types";

export function email(value: any): ValidatorResult {
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

  return {
    valid: true,
    error: null,
  };
}
