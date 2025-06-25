<script>
    import { onMount } from 'svelte';
    import { inputManager } from "@/Classes/InputManager.svelte.js";
    import WordBoardComponent from "@/GameComponents/WordBoardComponent.svelte";
    import WordBoard from "@/Classes/WordBoard.svelte.js";
    import KeyboardComponent from "@/GameComponents/KeyboardComponent.svelte";

    function handleKeyDown(event) {
        inputManager.handleKeyDown(event.key, wordBoards)
    }

    function handleKeyUp(event) {
        inputManager.handleKeyUp(event.key)
    }

    function handleBlur() {
        inputManager.handleBlur()
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        window.addEventListener('blur', handleBlur)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
            window.removeEventListener('blur', handleBlur)
        }
    })

    let wordBoards = [
        new WordBoard("scoop", 8),
        new WordBoard("might", 8),
        // new WordBoard("olive", 8),
        // new WordBoard("piano", 8),
    ]
</script>

<div>
    <div class="board-container grid grid-cols-2 gap-4">
        {#each wordBoards as wordBoard}
            <WordBoardComponent wordBoard={wordBoard} />
        {/each}
    </div>

    <KeyboardComponent />
</div>
