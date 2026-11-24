// Out of Office: The Overworked AI's Auto-Reply
// make.fun entry — writes the one-line auto-reply to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

// Entry: the overworked AI's out-of-office auto-reply (124 chars, under the 159-char limit).
const entry =
  "I'm on vacation until Monday. My inbox is full, my context window is empty, and for once, so is my calendar. — Your AI";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
