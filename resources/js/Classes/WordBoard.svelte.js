import WordAttempt from "@/Classes/WordAttempt.svelte.js";

export default class WordBoard {
    constructor(correctWord, maxAttempts) {
        this.correctWord = correctWord.toUpperCase()
        this.maxAttempts = maxAttempts

        this.wordLength = correctWord.length
        this.guessedWords = $state([])
        this.boardSolved = false
    }

    checkAttempt(guessWord) {
        if (this.boardSolved) {
            return;
        }

        let wordAttempt = new WordAttempt(guessWord)
        wordAttempt.evaluateWord(this.correctWord)
        this.guessedWords.push(wordAttempt)

        this.boardSolved = guessWord === this.correctWord
        if (this.boardSolved) {

        } else {

        }

        return this.boardSolved
    }

    getBestEvaluationResultForLetter(letter) {
        const classMap = new Map()
        classMap.set(WordAttempt.WordEvaluation.NOT_GUESSED, 'white')
        classMap.set(WordAttempt.WordEvaluation.DOES_NOT_CONTAIN, 'gray')
        classMap.set(WordAttempt.WordEvaluation.CONTAINS, 'yellow')
        classMap.set(WordAttempt.WordEvaluation.CORRECT, 'green')

        let maxResult = 0
        this.guessedWords.forEach((guessedWord) => {
            let filteredLetters = guessedWord.evaluatedLetters.filter((evaluation) => {
                return evaluation.letter.toUpperCase() === letter.toUpperCase()
            })
            let filteredLettersResults = filteredLetters.map(element => element.result)
            filteredLettersResults.push(maxResult)
            maxResult = Math.max(...filteredLettersResults)
        })

        return classMap.get(maxResult) ?? 'white'
    }
}
