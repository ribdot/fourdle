<script>
    export let letter = "";
    export let bgColorClass = ""
</script>

<div class={[bgColorClass, 'letter-wrapper', 'col-span-1', 'flex', 'flex-col', 'border-2', 'rounded-2xl', 'p-4', 'm-1', 'min-h-20', 'align-middle', 'justify-center']}>
    <div class="letter text-center text-4xl">{letter}</div>
</div>
