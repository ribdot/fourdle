class KeyboardLetter {
    letter = ""
    colors = {
        quadrant1: "white",
        quadrant2: "white",
        quadrant3: "white",
        quadrant4: "white",
    }

    constructor(letter) {
        this.letter = letter
    }
}

class Keyboard {
    static keyboardLayout = [
        'qwertyuiop',   // 10
        'asdfghjkl',    // 9
        'zxcvbnm'       // 7
    ]

    keyboardLetters = {}

    constructor() {
        Keyboard.keyboardLayout.forEach((row) => {
            row.forEach((letter) => {
                this.keyboardLetters[letter] = new KeyboardLetter(letter)
            })
        })
    }
}

export const keyboardManager = new Keyboard()
