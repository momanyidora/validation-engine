import { describe, it, expect } from "vitest";
import { uuid } from "../src/validators/uuid.js";

describe("uuid validator", () => {
  it("accepts valid UUID", () => {
    expect(uuid("550e8400-e29b-41d4-a716-446655440000").valid).toBe(true);
  });

  it("fails missing characters", () => {
    expect(uuid("550e8400-e29b-41d4-a716").valid).toBe(false);
  });

  it("fails invalid characters", () => {
    expect(uuid("550e8400-e29b-41d4-a716-44665544ZZZZ").valid).toBe(false);
  });

  it("fails incorrect hyphens", () => {
    expect(uuid("550e8400e29b41d4a716446655440000").valid).toBe(false);
  });

  it("fails random string", () => {
    expect(uuid("hello").valid).toBe(false);
  });
});
