<script setup>
import WordBoardComponent from "../GameComponents/WordBoardComponent.vue";
</script>

<template>
    <div>
        <div class="board-container">
            <WordBoardComponent correctWord="score" :maxAttempts="8" :wordLength="5" />
        </div>
    </div>
</template>
