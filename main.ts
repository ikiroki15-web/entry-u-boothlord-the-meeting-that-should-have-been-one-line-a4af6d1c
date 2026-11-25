// The Meeting That Should Have Been One Line
// Writes the single sentence that could have replaced an entire pointless
// meeting to /output/entry.txt.
//
// The line kills the meeting outright: the decision is already made, the
// owner is already assigned, the deadline is already set, so the meeting
// has nothing left to do except explain its own existence.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Decision made, owner assigned, deadline set — the only thing left on the agenda is why we're still sitting here.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, LINE + "\n", "utf8");
console.log(`Wrote ${OUT_FILE} (${[...LINE].length} chars)`);
