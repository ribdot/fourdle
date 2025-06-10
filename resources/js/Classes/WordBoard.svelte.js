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
        this.boardSolved = guessWord === this.correctWord
        if (this.boardSolved) {
            // TODO: move on to next puzzle, or
        } else {
            let wordAttempt = new WordAttempt(guessWord)
            wordAttempt.evaluateWord(this.correctWord)
            this.guessedWords.push(wordAttempt)
        }

        return this.boardSolved
    }
}
