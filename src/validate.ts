import type { ValidationError, Validator, ValidationOptions } from "./types.js";

import { email } from "./validators/email.js";

export interface ValidationResult {
  valid: boolean;
  value: unknown;
  originalValue: unknown;
  errors: ValidationError[];
}

export function validate(
  value: unknown,
  validators: Validator[],
  options: ValidationOptions = {},
): ValidationResult {
  const originalValue = value;

  let finalValue = value;

  if (options.coerce) {
    if (typeof finalValue === "string") {
      finalValue = finalValue.trim();
    }

    const usesEmailValidator = validators.includes(email);

    if (usesEmailValidator && typeof finalValue === "string") {
      finalValue = finalValue.toLowerCase();
    }
  }

  const errors: ValidationError[] = [];

  for (const validator of validators) {
    const result = validator(finalValue);

    if (!result.valid && result.error) {
      errors.push(result.error);
    }
  }

  return {
    valid: errors.length === 0,
    value: finalValue,
    originalValue,
    errors,
  };
}
