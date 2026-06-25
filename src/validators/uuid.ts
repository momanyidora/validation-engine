import type { ValidatorResult } from "../types";

export function uuid(value: unknown): ValidatorResult {
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isUUID",
        message: "Value must be a valid UUID",
        code: "INVALID_UUID",
      },
    };
  }

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(value)) {
    return {
      valid: false,
      error: {
        rule: "isUUID",
        message: "Value must be a valid UUID",
        code: "INVALID_UUID",
      },
    };
  }

  return {
    valid: true,
    error: null,
  };
}
