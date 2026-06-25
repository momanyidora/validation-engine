import { describe, it, expect } from "vitest";
import { date } from "../src/validators/date.js";

describe("date validator", () => {
  it("accepts ISO date", () => {
    expect(date("2026-06-19").valid).toBe(true);
  });

  it("accepts ISO datetime", () => {
    expect(date("2026-06-19T10:30:00Z").valid).toBe(true);
  });

  it("fails DD-MM-YYYY format", () => {
    expect(date("19-06-2026").valid).toBe(false);
  });

  it("fails invalid month", () => {
    expect(date("2026-99-99").valid).toBe(false);
  });

  it("fails random text", () => {
    expect(date("not-a-date").valid).toBe(false);
  });

  it("fails invalid calendar date", () => {
    expect(date("2026-02-31").valid).toBe(false);
  });
});
