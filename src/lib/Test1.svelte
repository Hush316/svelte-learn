<script>

    import { getContext } from "svelte";
    export let number;
    export let pkg;
    const answer = getContext('answer')
    console.log(pkg)
    function logTest() {
      console.log('测试1')
    }
    let src =''
    let srcName = 'A man'
    // 计算属性
    let count =1
    $: double = count *2
    function  add (){
        count += 1
    }
    let name='ddd',age=18
    $: info = () => {
        return `我是${name},我今年${age}岁`
    }
    $: {
        console.log(`count 发生了变化${count}`)
    }
    $: if(count>5){
        console.log('不能再加了')
        count = 4
    }
</script>


<h1>测试用</h1>
<h2>{answer}</h2>
<img src={src} alt="{srcName} dance">
<h1>父传子{number}</h1>
<p>name:{pkg.name},age:{pkg.age},gender:{pkg.gender}</p>
<h1>计算属性</h1>
<button on:click={add}>add</button>
<h1>{count}</h1>
<h1>{double}</h1>
<h1>{info()}</h1>
<style>
    h2 {
        color: aqua;
    }
</style>
