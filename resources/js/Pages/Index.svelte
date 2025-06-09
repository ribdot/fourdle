<script>
    import { onMount, onDestroy } from 'svelte';
    import { inputManager } from "@/Classes/InputManager.svelte.js";
    import WordBoardComponent from "@/GameComponents/WordBoardComponent.svelte";
    import WordBoard from "@/Classes/WordBoard.svelte.js";

    function handleKeyDown(event) {
        inputManager.handleKeyDown(event.key, wordBoard)
    }

    function handleKeyUp(event) {
        inputManager.handleKeyUp(event.key)
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    })

    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
    })

    let wordBoard = new WordBoard("score", 8)
</script>

<div>
    <div class="board-container">
        <WordBoardComponent wordBoard={wordBoard} />
    </div>
</div>
