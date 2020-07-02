# Turnstile kata, retrospective

This kata is based upon the concept in Computer Science of a Finite-State Machine, or FSM, otherwise known as a finite state automata or simply a state machine. More details can be found in the [Wikipedia article](https://en.wikipedia.org/wiki/Finite-state_machine).

The machine may be described by using either a state transition diagram, or a state table.

## Turnstile state transition diagram

```text
           Push                Insert coin          Insert coin

        +--------+       +----------------------+   +--------+
        |        |       |                      |   |        |
        |        |       |                      v   |        |
        |      +-+-------+--+              +----+---+---+    |
        |      |            |              |            |    |
        |      |   Locked   |              |  Unlocked  |    |
        |      |            |              |            |    |
        |      +-+---+---+--+              +----+---+---+    |
        |        ^   ^   ^                      |   ^        |
        |        |   |   |                      |   |        |
        +--------+   +   +----------------------+   +--------+

                   Start           Push
```

## Turnstile state table

| Current State | Input | Next State | Output |
| ------------- | ------| ---------- | ------ |
| Locked        | coin  | Unlocked   | Unlocks the turnstile so that the customer can push through |
| Locked        | push  | Locked     | None |
| Unlocked      | coin  | Unlocked   | None |
| Unlocked      | push  | Locked     | When the customer has pushed through, locks the turnstile |

Both the state transition diagram and the state table are semantically identical.

## eSafe state table

| Current State | Input | Next State | Output |
| ------------- | ------| ---------- | ------ |
| Locked        | ABCEF | Locked     | None   |
| Locked        | D     | Locked-1   | None   |
| Locked-1      | ABCDF | Locked     | None   |
| Locked-1      | E     | Locked-2   | None   |
| Locked-2      | ABCDF | Locked     | None   |
| Locked-2      | E     | Locked-3   | None   |
| Locked-3      | ABCEF | Locked     | None   |
| Locked-3      | D     | Unlocked   | Door opens |
| Unlocked      | Shut  | Locked     | None   |

## eSafe v2 state table

| Current State | Input | Next State | Output |
| ------------- | ------| ---------- | ------ |
| Locked        | ABCEF | Locked     | None   |
| Locked        | D     | Locked-1   | None   |
| Locked-1      | ABCDF | Locked     | None   |
| Locked-1      | E     | Locked-2   | None   |
| Locked-2      | BCDF  | Locked     | None   |
| Locked-2      | E     | Locked-3   | None   |
| Locked-2      | A     | Locked-3a  | None   |
| Locked-3      | ABCEF | Locked     | None   |
| Locked-3      | D     | Unlocked   | Door opens |
| Locked-3a     | ABCDE | Locked     | None   |
| Locked-3a     | F     | Unlocked   | Door opens |
| Unlocked      | Shut  | Locked     | None   |
