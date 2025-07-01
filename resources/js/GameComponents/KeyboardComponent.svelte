<script>
    const keyboardLayout = [
        'qwertyuiop',   // 10
        'asdfghjkl',    // 9
        'zxcvbnm'       // 7
    ]
    const rowClassMap = [
        'grid-cols-10',
        'grid-cols-9',
        'grid-cols-7',
    ]

    let hasReordered = false

    export let wordBoards

    function getBackgroundForLetter(letter) {
        if (!hasReordered) {
            let firstElement = wordBoards.shift()
            wordBoards.push(firstElement)
            hasReordered = true
        }

        let sectionPercent = parseFloat((1 / wordBoards.length).toFixed(2))
        let currentPercent = 0.0

        let backgroundSectionStyles = []
        wordBoards.forEach((wordBoard) => {
            // let color = ["green", "yellow", "gray"][Math.floor(Math.random() * 3)]
            let color = wordBoard.getBestEvaluationResultForLetter(letter)
            let conicValue = "var(--color-" + color + "-300) " +  currentPercent.toFixed(2) + "turn "
            currentPercent += sectionPercent
            conicValue += currentPercent.toFixed(2) + "turn"
            backgroundSectionStyles.push(conicValue)
        })

        return "conic-gradient(" + backgroundSectionStyles.toString() + ") top left"
    }
</script>

{#each keyboardLayout as row, index}
    <div class={['mx-auto', 'grid', rowClassMap[index]]} style="max-width:900px">
    {#each row as letter }
        <div
            class={['letter-wrapper', 'flex', 'flex-col', 'border-2', 'rounded-2xl', 'p-4', 'm-1', 'min-h-20', 'align-middle', 'justify-center']}
            style="background: {getBackgroundForLetter(letter)}"
        >
            <div class="letter text-center text-4xl">{letter.toUpperCase()}</div>
        </div>
    {/each}
    </div>
{/each}
