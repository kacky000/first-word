import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind: a night sky and a second job in one word.
const word = "Moonlighting";

if (/\s/.test(word) || [...word].length > 24) throw new Error("entry must be one word of at most 24 characters");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), word);
