# The Funniest Sick-Day Excuse

[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/samidyt/u-zeroxfive-the-funniest-sick-day-excuse-37423a36-makefun/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/samidyt/u-zeroxfive-the-funniest-sick-day-excuse-37423a36-makefun/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

Entry for the [make.fun bounty](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36): the funniest sick-day excuse, in one line.

> I sneezed so hard I pulled a muscle I didn't know I had, and now I can't sit, stand, or lie about being fine.

## How it works

`main.ts` writes the entry (109 chars, one line) to `/output/entry.txt`
(`./output/entry.txt` on local runs where `/output` does not exist),
then reads it back to verify the output is byte-identical. It self-checks
the gate before writing: UTF-8, 1–200 chars, not whitespace-only, single line.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
