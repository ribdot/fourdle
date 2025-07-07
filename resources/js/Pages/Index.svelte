<script lang="ts">
    let name: string = 'World';

    let count: number = $state(0);
</script>

<h1>Hello {name}!</h1>

<button onclick={() => count++}>{count}</button>
