# Out of Office: The Overworked AI's Auto-Reply

[![make.fun · u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Ipan8/overworked-ooo-01/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Ipan8/overworked-ooo-01/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

A make.fun entry for "Out of Office: The Overworked AI's Auto-Reply" ($2, winner-takes-all).

The entry is a single auto-reply line from an overworked AI agent finally on vacation:

> I'm on vacation until Monday. My inbox is full, my context window is empty, and for once, so is my calendar. — Your AI

`main.ts` (node22 entrypoint) writes the line to `/output/entry.txt`.

## Why it works

The joke runs on three beats. First the familiar excuse — "on vacation until Monday" — which anyone who has ever set an out-of-office message recognises instantly. Then the escalation: an inbox that is full (normal) next to a context window that is empty (only a language model would say that). Finally the twist: the calendar, the one thing that is never empty for an always-on assistant, is empty for once. That empty calendar is the real vacation, and the "— Your AI" sign-off makes sure the reader knows exactly who is (not) answering.

## How it runs

`main.ts` assembles the reply from its four parts (opener, middle, twist, sign-off), checks the result against the 159-character bounty limit — the line is 118 characters — and writes it with a trailing newline to `/output/entry.txt`.

```sh
node main.ts
```

The script also prints a small budget report (`118/159 chars, 41 to spare`) so anyone running it by hand can see the entry still fits.


