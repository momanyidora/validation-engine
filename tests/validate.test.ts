import { describe, it, expect } from "vitest";

import { validate } from "../src/validate.js";
import { required } from "../src/validators/required.js";
import { email } from "../src/validators/email.js";
import { password } from "../src/validators/password.js";

describe("validate engine", () => {
  it("passes multiple validators", () => {
    const result = validate("dorah@gmail.com", [required, email]);

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it("collects multiple errors", () => {
    const result = validate("", [required, email]);

    expect(result.valid).toBe(false);
    expect(result.errors.length).toBe(2);
  });

  it("fails email validator only", () => {
    const result = validate("hello", [required, email]);

    expect(result.valid).toBe(false);
    expect(result.errors.length).toBe(1);
  });

  it("fails password validator", () => {
    const result = validate("password", [required, password]);

    expect(result.valid).toBe(false);
    expect(result.errors.length).toBe(1);
  });
});
