<script>
    let html = `<p style="color: red">hello world</p>`
    let name = 3
    let yes =false
    $: {
        console.log(`name变成了${name}`)
    }
    let value = 'today is Friday'

    let questions = [
        { id: 1, text: `Where did you go to school?` },
        { id: 2, text: `What is your mother's name?` },
        { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
    ];

    let selected;

    let answer = '';

    function handleSubmit() {
        console.log(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
    }
</script>

<div contenteditable="true" bind:innerHTML={html}></div>

<input type=range bind:value={name}>

<input type="checkbox" bind:checked={yes}>

<button disabled={!yes}>
    Subscribe
</button>
<h1>{value}</h1>
<textarea bind:value></textarea>

<form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change="{() => answer = ''}">
        {#each questions as question}
            <option value={question}>
                {question.text}
            </option>
        {/each}
    </select>

    <input bind:value={answer}>

    <button disabled={!answer} type=submit>
        Submit
    </button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>
