const {is, testRunner} = require('@gowerstreet/infintestimal')

class Turnstile {
  constructor() { this.locked = true }

  pay() {
    this.locked = false
  }
  push() {
    if (this.locked) {
      return false
    } else {
      return this.locked = true
    }
  }
} // end class

const lockedTurnstile =
      [['A new turnstile is locked',
        () => {
          t = new Turnstile()
          return is(false, t.push())
        }],
       ['Entering a coin allows you to push through the stile',
        () => {
          t = new Turnstile()
          t.pay()
          return is(true, t.push())
        }],
       ['Using a coin only allows one person to pass',
        () => {
          t = new Turnstile()
          t.pay()
          t.push()
          return is(false, t.push())
        }],
       ['Multiple coins together still allow only one person to pass',
        () => {
          t = new Turnstile()
          t.pay()
          t.pay() // we are not checking that the coin is returned
          return (is(true, t.push()) && is(false, t.push()))
        }],
       ]
 
testRunner(lockedTurnstile)
      
