<script>
    import { inputManager } from "@/Classes/InputManager.svelte.js";
    import LetterComponent from "@/GameComponents/LetterComponent.svelte";

    const wordLengthClassMap = {
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    }

    export let wordLength
    export let active
    export let word = ""
</script>

<div class={['mx-auto', 'grid', wordLengthClassMap[wordLength], active ? 'bg-red-300' : '']} style="max-width:500px">
    {#if !active && word}
        {#each {length: wordLength} as letter, letterIndex}
            <LetterComponent letter={word[letterIndex]} />
        {/each}
    {:else}
        {#each {length: wordLength} as letter, inputIndex}
            <LetterComponent letter="{active ? inputManager.inputString[inputIndex] ?? '' : ''}" />
        {/each}
    {/if}
</div>
