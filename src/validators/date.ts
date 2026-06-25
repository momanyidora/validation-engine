import type { ValidatorResult } from "../types";

export function date(value: unknown): ValidatorResult {
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

  // Reject invalid calendar dates like 2026-99-99
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

  return {
    valid: true,
    error: null,
  };
}
