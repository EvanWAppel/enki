import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { capitalize, numberToWord } from "@/lib/numberWords";

describe("numberToWord", () => {
  it("spells small counts as words", () => {
    expect(numberToWord(0)).toBe("zero");
    expect(numberToWord(9)).toBe("nine");
    expect(numberToWord(11)).toBe("eleven");
    expect(numberToWord(20)).toBe("twenty");
  });

  it("falls back to the numeral outside the table", () => {
    expect(numberToWord(21)).toBe("21");
    expect(numberToWord(100)).toBe("100");
  });
});

describe("capitalize", () => {
  it("uppercases the first character", () => {
    expect(capitalize("eleven")).toBe("Eleven");
  });

  it("leaves an empty string untouched", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("projects page count copy", () => {
  // The /projects intro and metadata spell the shipped count as a word. Guard
  // that the count stays within the word table, so the copy never renders a
  // bare numeral like "21 working applications".
  it("shipped project count spells as a word, not a numeral", () => {
    const shippedCount = projects.filter((p) => !p.wip).length;
    expect(numberToWord(shippedCount)).not.toMatch(/^\d+$/);
  });
});
