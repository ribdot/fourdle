<script>
    import WordAttempt from "./WordAttempt.svelte";

    export let correctWord
    export let maxAttempts
    export let wordLength
</script>

<div>
    {#each Array.from({length: maxAttempts}) as attempt, index}
        <WordAttempt wordLength={wordLength} />
    {/each}
</div>
