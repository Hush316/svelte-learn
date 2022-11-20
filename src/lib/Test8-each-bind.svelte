<script>
    let todos = [
        { done: false, text: 'finish Svelte tutorial' },
        { done: false, text: 'build an app' },
        { done: false, text: 'world domination' }
    ];

    function add() {
        todos = todos.concat({ done: false, text: '' });
    }

    function clear() {
        todos = todos.filter(t => !t.done);
    }

    $: remaining = todos.filter(t => !t.done).length;

    let students =[{name:'john',age:12},{name:'mike',age:13},{name:'bob',age:14}]
    const addStudent = () =>{
        console.log('add')
        students = [...students,{name:'',age:''}]
    }
</script>

<style>
    .done {
        opacity: 0.4;
    }
</style>

<h1>Todos</h1>
<button on:click={()=>console.log(students)}>打印</button>
<button on:click={addStudent}>添加学生</button>
<ul>
    {#each students as student}
    <li>
    我是{student.name}, <input type="number" bind:value={student.age}>岁了
    </li>
{/each}
</ul>


{#each todos as todo}
    <div class:done={todo.done}>
        <input
                type=checkbox
                bind:checked={todo.done}
        >

        <input
                placeholder="What needs to be done?"
                bind:value={todo.text}
        >
    </div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}>
    Add new
</button>

<button on:click={clear}>
    Clear completed
</button>
