class InputManager {
    static BACKSPACE = Object.freeze({value: 'Backspace'})
    static ENTER = Object.freeze({value: 'Enter'})

    // TODO: define word length else where in app (probably back end eventually)
    static WORD_LENGTH = Object.freeze({value: 5})

    constructor(stringLength) {
        this.stringLength = stringLength
        this.inputString = $state("")

        this.preventInput = false
    }

    handleKeyDown(key, wordBoards) {
        if (this.preventInput) {
            return
        }

        if (key === InputManager.BACKSPACE.value) {
            if (this.inputString.length > 0) {
                this.inputString = this.inputString.substring(0, this.inputString.length - 1)
            }
        } else if (key === InputManager.ENTER.value) {
            if (this.inputString.length >= InputManager.WORD_LENGTH.value) {
                wordBoards.forEach((wordBoard) => { wordBoard.checkAttempt(this.inputString) })
                this.inputString = ""
            } else {
                // TODO: some feedback about not being able to check guess
            }
        } else if (
            this.isLetterKey(key)
            && this.inputString.length < this.stringLength
        ) {
            this.inputString += key.toUpperCase()
        } else {
            this.preventInput = true
        }
    }

    handleKeyUp(key) {
        if (
            !this.isLetterKey(key)
            && key !== InputManager.BACKSPACE.value
            && key !== InputManager.ENTER.value
        ) {
            this.preventInput = false
        }
    }

    handleBlur() {
        this.preventInput = false
    }

    isLetterKey(key) {
        return key.length === 1 && key.toLowerCase().match(/[a-z]/i)
    }
}

export const inputManager = new InputManager(5);
