// The Funniest Sick-Day Excuse — make.fun entry
// Entrypoint: writes the entry text to /output/entry.txt
// (or ./output/entry.txt when /output does not exist, e.g. local runs),
// then reads it back to verify byte-for-byte.

import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I sneezed so hard I pulled a muscle I didn't know I had, and now I can't sit, stand, or lie about being fine.";

// Gate self-check: UTF-8, 1-200 chars, not whitespace-only, single line.
// Count code points, not UTF-16 units, so the gate matches the grader.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry length ${chars.length} outside 1-200 chars`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = existsSync("/output") ? "/output" : join(here, "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-for-byte.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip verification failed: output differs from entry");
}

console.log(`OK: wrote ${chars.length} chars to ${outPath}`);
