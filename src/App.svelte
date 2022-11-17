<script lang="ts">
  import { setContext } from 'svelte'

  // import Test1 from "./lib/Test1.svelte";
  // import Test2 from './lib/Test2-v-if.svelte'
  // import  Test3 from './lib/Test3-await.svelte'
  // import  Test4 from './lib/Test4-dispatch.svelte'
  import Test5 from './lib/Test5-v-bind.svelte'
  setContext('answer',42)

  //父传子,传对象
  // const pkg ={
  //   name:'bbb',
  //   age:22,
  //   gender:'man'
  // }

  function handleMessage(event) {
    console.log(event.detail.text)
  }
  </script>

<main>
<!--  <Test1 number={22} pkg={pkg}></Test1>-->
<!--  <Test2></Test2>-->
<!--  <Test3></Test3>-->
<!--  <Test4  on:message={handleMessage}></Test4>-->
  <Test5></Test5>
</main>

<style>

</style>
