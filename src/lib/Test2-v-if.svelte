<script>
     let user = {loggedIn:false}

     function toggle(){
         user.loggedIn =!user.loggedIn
     }

     let cats = [
         { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
         { id: 'z_AbfPXTKms', name: 'Maru' },
         { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
     ];
</script>


<button on:click={toggle}>改变登陆状态</button>
{#if user.loggedIn}
    <button>login out</button>

{:else}
<button> login in</button>
    {/if}

<ul>
    {#each cats as {id,name},i}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
            {i}.    {name}
        </a></li>
    {/each}
</ul>

