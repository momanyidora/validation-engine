import { describe, it, expect } from "vitest";
import { url } from "../src/validators/url.js";

describe("url validator", () => {
  it("accepts https URL", () => {
    expect(url("https://example.com").valid).toBe(true);
  });

  it("accepts http URL", () => {
    expect(url("http://example.com").valid).toBe(true);
  });

  it("fails URL without protocol", () => {
    expect(url("example.com").valid).toBe(false);
  });

  it("fails random string", () => {
    expect(url("hello").valid).toBe(false);
  });

  it("fails malformed URL", () => {
    expect(url("https://").valid).toBe(false);
  });

  it("fails null", () => {
    expect(url(null).valid).toBe(false);
  });
});
