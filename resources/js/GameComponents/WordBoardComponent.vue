<script setup>
import WordAttemptComponent from "./WordAttemptComponent.vue";

const props = defineProps(['maxAttempts', 'wordLength', 'correctWord'])
</script>

<template>
<div>
    <WordAttemptComponent v-for="attemptIndex in maxAttempts" :word-length="5" />
</div>
</template>

<style scoped>

</style>
