<script>
    import WordAttemptComponent from "@/GameComponents/WordAttemptComponent.svelte";

    export let wordBoard
</script>

<div>
    {#each {length: wordBoard.maxAttempts} as attempt, index}
        {#if wordBoard.guessedWords[index]}
            <WordAttemptComponent
                wordLength={wordBoard.correctWord.length}
                active={false}
                wordAttempt={wordBoard.guessedWords[index]}
            />
        {:else}
            <WordAttemptComponent
                wordLength={wordBoard.correctWord.length}
                active={wordBoard.guessedWords.length === index && !wordBoard.boardSolved}
            />
        {/if}
    {/each}
</div>
