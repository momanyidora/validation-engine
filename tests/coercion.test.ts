import { describe, it, expect } from "vitest";
import { validate } from "../src/validate.js";
import { email } from "../src/validators/email.js";

describe("coercion", () => {
  it("trims whitespace", () => {
    const result = validate("  hello@example.com  ", [email], { coerce: true });

    expect(result.value).toBe("hello@example.com");
  });

  it("lowercases emails", () => {
    const result = validate("STUDENT@EXAMPLE.COM", [email], { coerce: true });

    expect(result.value).toBe("student@example.com");
  });
});
