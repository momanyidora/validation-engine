import type { ValidatorResult } from "../types";

export function required(value: any): ValidatorResult {
  if (value === null || value === undefined) {
    return {
      valid: false,
      error: {
        rule: "required",
        message: "Value is required and cannot be undefined or null",
        code: "REQUIRED",
      },
    };
  }

  if (typeof value === "string" && value.trim().length === 0) {
    return {
      valid: false,
      error: {
        rule: "required",
        message:
          "Value is required and cannot be an empty whitespace-only string.",
        code: "REQUIRED",
      },
    };
  }

  return {
    valid: true,
    error: null,
  };
}
