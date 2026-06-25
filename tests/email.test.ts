import { describe, it, expect } from "vitest";
import { email } from "../src/validators/email.js";

describe("email validator", () => {
  it("accepts a valid email", () => {
    expect(email("dorah@gmail.com").valid).toBe(true);
  });

  it("accepts uppercase email", () => {
    expect(email("DORAH@gmail.com").valid).toBe(true);
  });

  it("fails email without domain", () => {
    expect(email("dorah@gmail").valid).toBe(false);
  });

  it("fails email without local part", () => {
    expect(email("@gmail.com").valid).toBe(false);
  });

  it("fails email without @", () => {
    expect(email("dorah gmail.com").valid).toBe(false);
  });

  it("fails empty string", () => {
    expect(email("").valid).toBe(false);
  });

  it("fails null", () => {
    expect(email(null).valid).toBe(false);
  });
});
