<script setup>
import LetterComponent from "./LetterComponent.vue";

const wordLengthClassMap = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
}

defineProps(['wordLength'])
</script>

<template>
    <div class="mx-auto grid" :class="wordLengthClassMap[wordLength]" style="max-width:500px">
        <LetterComponent v-for="wordIndex in wordLength" />
    </div>
</template>

<style scoped>

</style>
