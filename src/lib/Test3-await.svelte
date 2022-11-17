<script>
    let m = {x:0,y:0}

    let promise = getRandomNumber();

    async function getRandomNumber() {
        const res = await fetch(`tutorial/random-number`);
        const text = await res.text();

        if (res.ok) {
            console.log(text)
            return text;
        } else {
            console.log(text)
            throw new Error(text);
        }
    }

    function handleClick() {
        promise = getRandomNumber();
    }
    function handleMouseMove(e){
        m.x =e.clientX
        m.y =e.clientY
    }
</script>

<h1>AWAIT</h1>
<button on:click={handleClick}>
    generate random number
</button>

{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<div on:mousemove={handleMouseMove}>鼠标移动坐标x:{m.x},y:{m.y}</div>
