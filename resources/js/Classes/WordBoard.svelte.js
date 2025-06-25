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
}
