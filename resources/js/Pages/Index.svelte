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

    function handleBlur() {
        inputManager.handleBlur()
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        window.addEventListener('blur', handleBlur)
    })

    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
        window.removeEventListener('blur', handleBlur)
    })

    let wordBoard = new WordBoard("scoop", 8)
</script>

<div>
    <div class="board-container">
        <WordBoardComponent wordBoard={wordBoard} />
    </div>
</div>
