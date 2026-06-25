import { describe, it, expect } from "vitest";
import { required } from "../src/validators/required.js";

describe("required validator", () => {
  it("passes for normal string", () => {
    expect(required("hello").valid).toBe(true);
  });

  it("fails for empty string", () => {
    expect(required("").valid).toBe(false);
  });

  it("fails for whitespace-only string", () => {
    expect(required("   ").valid).toBe(false);
  });

  it("fails for null", () => {
    expect(required(null).valid).toBe(false);
  });

  it("fails for undefined", () => {
    expect(required(undefined).valid).toBe(false);
  });
});
