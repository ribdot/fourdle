export default class WordAttempt {
    static WordEvaluation = Object.freeze({
        DOES_NOT_CONTAIN: 0,
        CONTAINS: 1,
        CORRECT_PLACE: 2
    })

    constructor(guess) {
        this.guess = guess
        this.evaluatedLetters = $state([])
    }

    evaluateWord(correctWord) {
        let checkForLetterDupes = []    // TODO: check for dupe letters
        for(let i = 0; i < this.guess.length; i ++) {
            let letter = this.guess[i]
            let evaluation = {
                letter,
                result: WordAttempt.WordEvaluation.DOES_NOT_CONTAIN
            }
            if (correctWord[i] === letter) {
                evaluation.result = WordAttempt.WordEvaluation.CORRECT_PLACE
            } else if (correctWord.includes(letter)) {
                evaluation.result = WordAttempt.WordEvaluation.CONTAINS
            }

            this.evaluatedLetters.push(evaluation)
        }
    }
}
