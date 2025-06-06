<script>
    import Letter from "./Letter.svelte";

    const wordLengthClassMap = {
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    }

    export let wordLength
</script>

<div class={['mx-auto', 'grid', wordLengthClassMap[wordLength]]} style="max-width:500px">
    {#each Array.from({length: wordLength}) as letter, index}
        <Letter />
    {/each}
</div>
