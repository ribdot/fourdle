export default class WordAttempt {
    static WordEvaluation = Object.freeze({
        NOT_GUESSED: 0,
        DOES_NOT_CONTAIN: 1,
        CONTAINS: 2,
        CORRECT: 3
    })

    constructor(guess) {
        this.guess = guess
        this.evaluatedLetters = $state([])
    }

    getWordEvaluationClass(index) {
        const classMap = new Map()
        classMap.set(WordAttempt.WordEvaluation.NOT_GUESSED, 'bg-white-300')
        classMap.set(WordAttempt.WordEvaluation.DOES_NOT_CONTAIN, 'bg-gray-300')
        classMap.set(WordAttempt.WordEvaluation.CONTAINS, 'bg-yellow-300')
        classMap.set(WordAttempt.WordEvaluation.CORRECT, 'bg-green-300')

        return classMap.get(this.evaluatedLetters[index].result) ?? 'bg-white-300'
    }

    evaluateWord(correctWord) {
        // init all letters to DOES_NOT_CONTAIN
        for(let i = 0; i < this.guess.length; i ++) {
            let letter = this.guess[i]
            this.evaluatedLetters.push({
                letter,
                result: WordAttempt.WordEvaluation.DOES_NOT_CONTAIN
            })
        }

        // set CONTAINS result if applicable
        this.evaluatedLetters.forEach((evaluation, index) => {
            let numberOfLetters = this.countNumberOfLetters(correctWord, evaluation.letter)
            let numberOfCorrectSpots = this.evaluatedLetters.filter((data) => {
                return data.letter.toUpperCase() === evaluation.letter.toUpperCase()
                    && data.result === WordAttempt.WordEvaluation.CORRECT
            }).length
            let numberOfWrongSpots = this.evaluatedLetters.filter((data) => {
                return data.letter === evaluation.letter
                    && data.result === WordAttempt.WordEvaluation.CONTAINS
            }).length

            if (numberOfCorrectSpots + numberOfWrongSpots < numberOfLetters) {
                this.evaluatedLetters[index].result = WordAttempt.WordEvaluation.CONTAINS
            }
        })

        // prioritize checking for CORRECT letters first
        this.evaluatedLetters.forEach((evaluation, index) => {
            if (correctWord[index] === evaluation.letter) {
                this.evaluatedLetters[index].result = WordAttempt.WordEvaluation.CORRECT
            }
        })
    }

    countNumberOfLetters(word, letter) {
        return word.match(new RegExp(letter, 'g'))?.length ?? 0;
    }
}
