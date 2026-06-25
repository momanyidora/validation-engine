import { describe, it, expect } from "vitest";
import { phoneNumber } from "../src/validators/phoneNumber.js";

describe("phoneNumber validator", () => {
  it("accepts Kenyan number", () => {
    expect(phoneNumber("+254712345678").valid).toBe(true);
  });

  it("accepts another valid E.164 number", () => {
    expect(phoneNumber("+14155552671").valid).toBe(true);
  });

  it("fails without plus sign", () => {
    expect(phoneNumber("254712345678").valid).toBe(false);
  });

  it("fails with letters", () => {
    expect(phoneNumber("+254ABC12345").valid).toBe(false);
  });

  it("fails with spaces", () => {
    expect(phoneNumber("+254 712345678").valid).toBe(false);
  });

  it("fails when too short", () => {
    expect(phoneNumber("+2547").valid).toBe(false);
  });

  it("fails when too long", () => {
    expect(phoneNumber("+254712345678999999").valid).toBe(false);
  });
});
