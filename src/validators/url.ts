import type { ValidatorResult } from "../types";

export function url(value: any): ValidatorResult {
  if (typeof value !== "string") {
    return {
      valid: false,
      error: {
        rule: "isURL",
        message: "Value must be a valid URL",
        code: "INVALID_URL",
      },
    };
  }

  try {
    const parsedUrl = new URL(value);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return {
        valid: false,
        error: {
          rule: "isURL",
          message: "Value must be a valid URL",
          code: "INVALID_URL",
        },
      };
    }

    return {
      valid: true,
      error: null,
    };
  } catch {
    return {
      valid: false,
      error: {
        rule: "isURL",
        message: "Value must be a valid URL",
        code: "INVALID_URL",
      },
    };
  }
}
