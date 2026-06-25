import { describe, it, expect } from "vitest";
import { password } from "../src/validators/password.js";

describe("password validator", () => {
  it("accepts strong password", () => {
    expect(password("Password1!").valid).toBe(true);
  });

  it("fails if less than 8 characters", () => {
    expect(password("Pass1!").valid).toBe(false);
  });

  it("fails without uppercase", () => {
    expect(password("password1!").valid).toBe(false);
  });

  it("fails without digit", () => {
    expect(password("Password!").valid).toBe(false);
  });

  it("fails without special character", () => {
    expect(password("Password1").valid).toBe(false);
  });

  it("fails completely weak password", () => {
    expect(password("abc").valid).toBe(false);
  });
});
