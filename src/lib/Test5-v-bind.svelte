<script>
    let name = 3
    let yes =false
    $: {
        console.log(`name变成了${name}`)
    }

</script>

<input type=range bind:value={name}>

<input type="checkbox" bind:checked={yes}>

<button disabled={!yes}>
    Subscribe
</button>
