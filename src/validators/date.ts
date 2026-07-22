import type { ValidatorResult } from "../types";

// Validates whether the provided value is a valid ISO 8601 date string.
export function date(value: unknown): ValidatorResult {
  // Ensure the input is a string before attempting date validation.
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isISODate",
        message: "Value must be a valid ISO 8601 date",
        code: "INVALID_DATE",
      },
    };
  }

  // Check the basic ISO 8601 format before parsing the date.
  const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}Z)?$/;

  if (!isoRegex.test(value)) {
    return {
      valid: false,
      error: {
        rule: "isISODate",
        message: "Value must be a valid ISO 8601 date",
        code: "INVALID_DATE",
      },
    };
  }

  // Parse the value to verify it represents a real calendar date.
  const parsedDate = new Date(value);

  if (isNaN(parsedDate.getTime())) {
    return {
      valid: false,
      error: {
        rule: "isISODate",
        message: "Value must be a valid ISO 8601 date",
        code: "INVALID_DATE",
      },
    };
  }

  // Reject invalid calendar dates like 2026-99-99.
  const datePart = value.split("T")[0];

  if (parsedDate.toISOString().slice(0, 10) !== datePart) {
    return {
      valid: false,
      error: {
        rule: "isISODate",
        message: "Value must be a valid ISO 8601 date",
        code: "INVALID_DATE",
      },
    };
  }

  // Return success when the date is both parseable and structurally valid.
  return {
    valid: true,
    error: null,
  };
}
