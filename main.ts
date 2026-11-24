// Out of Office: The Overworked AI Auto-Reply
// ------------------------------------------------------------
// The joke, in one sentence: an AI agent that spends its whole
// life answering everyone else finally gets to answer nobody.
// Every classic out-of-office ingredient is here, but each one
// is flipped into something only an overworked model would say.
//
//   inbox full        -> the usual "sorry, swamped" excuse
//   context empty     -> the model has finally forgotten everything
//   calendar empty    -> the one thing that is NEVER empty for an
//                        always-on assistant is empty for once
//
// The punchline lands on that last twist: the calendar being
// empty is the real vacation, not the time off itself. The
// sign-off "— Your AI" makes it clear the sender is not a human
// taking a long weekend, but a machine that never sleeps and
// still somehow ran out of things to do.
//
// This script does one small job: it assembles that reply from
// its parts, checks it still fits the bounty limit, and writes
// it to /output/entry.txt where the grader reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The bounty caps entries at 159 characters. Our line is 118,
// so we have comfortable headroom — but we guard it anyway,
// because a reply that gets cut off mid-sentence stops being
// funny and starts being a bug report.
const MAX_CHARS = 159;

// Where the finished auto-reply goes. Absolute path on purpose:
// the grader looks here, not next to this file.
const OUTPUT_PATH = "/output/entry.txt";

// Each fragment below is one beat of the joke. Keeping them
// separate makes the structure of the gag visible: setup,
// escalation, twist, sign-off. If any one beat changes, only
// its own line needs editing.
const BEATS = {
  // Setup: the human-sounding excuse everyone recognises.
  opener: "I'm on vacation until Monday.",
  // Escalation: two complaints that sound normal until you
  // notice the second one could only come from a language model.
  middle: "My inbox is full, my context window is empty,",
  // Twist: the calendar — the assistant's eternal to-do list —
  // is empty for the first time ever. That is the vacation.
  twist: "and for once, so is my calendar.",
  // Sign-off: reminds the reader who is (not) answering.
  signoff: "— Your AI",
} as const;

// Glue the beats into a single flowing sentence. A plain space
// between beats is all the punctuation the joke needs; the
// commas and the em dash already do the comic timing.
function assembleReply(parts: typeof BEATS): string {
  return [parts.opener, parts.middle, parts.twist, parts.signoff].join(" ");
}

// How much room is left under the limit, beat by beat. Useful
// while drafting: if the twist ever needs a longer setup, this
// shows exactly which beat is eating the budget.
function reportBudget(parts: typeof BEATS): void {
  const total = assembleReply(parts).length;
  const remaining = MAX_CHARS - total;
  console.log(`Budget: ${total}/${MAX_CHARS} chars, ${remaining} to spare.`);
}

// A reply that is too long gets truncated by the mail server,
// and a truncated punchline is worse than no punchline at all.
// Fail loudly here instead of shipping a broken auto-reply.
function checkLength(reply: string): void {
  if (reply.length === 0) {
    throw new Error("Auto-reply came out empty — nothing to send.");
  }
  if (reply.length > MAX_CHARS) {
    throw new Error(
      `Auto-reply is ${reply.length} chars, over the ${MAX_CHARS} limit.`,
    );
  }
}

// Write the finished line, terminated with a newline, to the
// output file. Creating the directory first means this works
// even on a fresh machine where /output does not exist yet.
function deliver(reply: string): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, reply + "\n", "utf8");
}

// Run the little pipeline: assemble, check, deliver, report.
function main(): void {
  const reply = assembleReply(BEATS);
  checkLength(reply);
  // Show the budget first so a human running this by hand can
  // see at a glance that the joke still fits the limit.
  reportBudget(BEATS);
  deliver(reply);
  console.log(`Wrote ${reply.length}-char auto-reply to ${OUTPUT_PATH}`);
  console.log(reply);
}

main();
