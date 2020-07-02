const {is, testRunner} = require('@gowerstreet/infintestimal')

class Safe {
  constructor() {
    this.locked = true
    this.passcode = ['D', 'E', 'E', 'D']
    this.state = 0
  }
  open() { return !this.locked }
  press(key) {
    if (key === this.passcode[this.state]) {
      this.state++
    } else {
      this.state = 0
    }
    if (this.state === 4) { this.locked = false }
    return null
  }
  shut() { return this.locked = true }
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
        }
       ]]

testRunner(lockedSafe)
