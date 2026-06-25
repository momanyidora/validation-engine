import type { ValidatorResult } from "../types";

export function password(value: any): ValidatorResult {
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isStrongPassword",
        message: "Value must be a strong password",
        code: "INVALID_PASSWORD",
      },
    };
  }

  const failures: string[] = [];

  if (value.length < 8) {
    failures.push("at least 8 characters");
  }

  if (!/[A-Z]/.test(value)) {
    failures.push("at least 1 uppercase letter");
  }

  if (!/\d/.test(value)) {
    failures.push("at least 1 digit");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    failures.push("at least 1 special character");
  }

  if (failures.length > 0) {
    return {
      valid: false,
      error: {
        rule: "isStrongPassword",
        message: `Password must contain: ${failures.join(", ")}`,
        code: "INVALID_PASSWORD",
      },
    };
  }

  return {
    valid: true,
    error: null,
  };
}
