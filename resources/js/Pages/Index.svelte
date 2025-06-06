<script>
    import WordBoard from "../GameComponents/WordBoard.svelte";
</script>

<div>
    <div class="board-container">
        <WordBoard correctWord="score" maxAttempts="8" wordLength="5" />
    </div>
</div>
