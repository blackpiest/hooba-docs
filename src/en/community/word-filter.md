# Word filter

Words from the list are automatically replaced in messages with asterisks of the same length: `*****`. A word like that also can't be used to register (in a login) or saved as a display name.

## Set it up

Control panel → **«Фильтр слов»** (Word filter) → enter a word → «Добавить слово» (Add word). Each addition and removal is saved immediately. Up to 500 words in total.

If the list is empty, messages aren't filtered.

## Patterns

An asterisk can be placed only at the edges of a word:

| Pattern | What it catches | Example |
|---|---|---|
| `word` | only this exact word | `fool` — "fool", but not "fools" |
| `word*` | words that **start** with this | `fool*` — "fool", "fools", "foolish" |
| `*word` | words that **end** with this | |
| `*word*` | words that **contain** this | |

Case doesn't matter, and the Russian letters `ё` and `е` count as the same letter. The whole word containing a match is replaced, while the punctuation around it stays.

## What to keep in mind

- The filter applies to **new and edited** messages. Messages already sent stay as they were — you can delete them through the message menu.
- There are no exceptions: the filter applies to staff too.
- Existing logins and names aren't rechecked — if needed, [hide the name](/en/community/moderation#member-menu).
