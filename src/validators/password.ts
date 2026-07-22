import type { ValidatorResult } from "../types";

// Validates whether the provided input meets the required strength rules for a password.
export function password(value: any): ValidatorResult {
  // Ensure the input is a string before checking password requirements.
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

  // Collect each missing password requirement so the error can describe them clearly.
  const failures: string[] = [];

  // Require a minimum password length.
  if (value.length < 8) {
    failures.push("at least 8 characters");
  }

  // Require at least one uppercase letter.
  if (!/[A-Z]/.test(value)) {
    failures.push("at least 1 uppercase letter");
  }

  // Require at least one numeric digit.
  if (!/\d/.test(value)) {
    failures.push("at least 1 digit");
  }

  // Require at least one special character.
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    failures.push("at least 1 special character");
  }

  // Return the specific validation failures when the password is not strong enough.
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

  // Return success when all password strength checks pass.
  return {
    valid: true,
    error: null,
  };
}
