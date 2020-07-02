const {is, testRunner} = require('@gowerstreet/infintestimal')

const LOCKED = 0
const UNLOCKED = 5

class Safe {
  constructor() {
    this.stateTable = [{A: 0, B: 0, C: 0, D: 1, E: 0, F: 0}, // 0 Starting, Locked
                       {A: 0, B: 0, C: 0, D: 0, E: 2, F: 0}, // 1
                       {A: 4, B: 0, C: 0, D: 0, E: 3, F: 0}, // 2
                       {A: 0, B: 0, C: 0, D: 5, E: 0, F: 0}, // 3
                       {A: 0, B: 0, C: 0, D: 0, E: 0, F: 5}, // 4
                       {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0}] // 5 Unlocked
    this.state = LOCKED
  }
  open() { return (this.state === UNLOCKED) }
  press(key) { this.state = this.stateTable[this.state][key] }
  shut() { this.state = LOCKED }
} // end class

const lockedSafe =
      [['A new safe is locked',
        () => {
          s = new Safe()
          return is(false, s.open())
        }],
       ['Entering the correct code will open the safe',
        () => {
          s = new Safe()
          s.press('D')
          s.press('E')
          s.press('E')
          s.press('D')
          return is(true, s.open())
        }],
       ['Shutting the door will lock the safe again',
        () => {
          s = new Safe()
          s.press('D')
          s.press('E')
          s.press('E')
          s.press('D')
          s.open()
          s.shut()
          return is(false, s.open())
        }],
       ['Entering an incorrect passcode will not open the safe',
        () => {
          s = new Safe()
          s.press('B')
          s.press('E')
          s.press('E')
          s.press('F')
          return is(false, s.open())
        }],
       ['Entering a wrong key will abort an otherwise successful entry',
        () => {
          s = new Safe()
          s.press('D')
          s.press('E')
          s.press('B')
          s.press('D')
          return is(false, s.open())
        }],
       ['Entering the second passcode will open the safe',
        () => {
          s = new Safe()
          s.press('D')
          s.press('E')
          s.press('A')
          s.press('F')
          return is(true, s.open())
        }]        
       ]

testRunner(lockedSafe)
