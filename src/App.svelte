<script lang="ts">
  import { setContext } from 'svelte'

  // import Test1 from "./lib/Test1.svelte";
  // import Test2 from './lib/Test2-v-if.svelte'
  // import  Test3 from './lib/Test3-await.svelte'
  // import  Test4 from './lib/Test4-dispatch.svelte'
  // import Test5 from './lib/Test5-v-bind.svelte'
  // import  Test6  from './lib/Test6-video.svelte'
  // import Test7 from './lib/Test7-Bind.svelte'
  // import Test8 from './lib/Test8-each-bind.svelte'
  // import Test9 from './lib/Test9-bind-this.svelte'
  // import  Test10 from './lib/Test10-compontent-bind.svelte'
  // import Test11 from './lib/Test11-lifecycle1.svelte'
  // import Test12 from './lib/Test12-botChat.svelte'
  // import Test13 from './lib/Test13-Store.svelte'
  // import Test14 from './lib/Test14-custom-store.svelte'
  // import Test15 from './lib/Test15-Tweened.svelte'
  // import Test16 from './lib/Test16-Spring.svelte'
  // import Test17 from './lib/Test17-Transition.svelte'
  // import Test18 from './lib/Test18-custom-transition.svelte'
  // import Test19 from './lib/Test19-js-transition.svelte'
  // import Test20 from './lib/Test20-transition-status.svelte'
  // import Test21 from './lib/Test21-local-transition.svelte'
  // import Test22 from './lib/Test22-defer-transition.svelte'
  import Test23 from './lib/Test23-animate.svelte'

  setContext('answer', 42)

  //父传子,传对象
  // const pkg ={
  //   name:'bbb',
  //   age:22,
  //   gender:'man'
  // }

  // function handleMessage(event) {
  //   console.log(event.detail.text)
  // }

  // 组件绑定
  // let pin;
  // $: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';
  // function handleSubmit() {
  //   let a = '2'
  //   let b = 77
  //   let c = a += b
  //   console.log(c)
  //   alert(`submitted ${pin}`);
  // }
</script>

<main>
  <!--  <Test1 number={22} pkg={pkg}></Test1>-->
  <!--  <Test2></Test2>-->
  <!--  <Test3></Test3>-->
  <!--  <Test4  on:message={handleMessage}></Test4>-->
  <!--  <Test5></Test5>-->
  <!--  <Test6></Test6>-->
  <!--  <Test7></Test7>-->
  <!--  <Test8></Test8>-->
  <!--  <Test9></Test9>-->
  <!--  <h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>-->
  <!--  <Test10 bind:value={pin} on:submit={handleSubmit}></Test10>-->
  <!--  <Test11></Test11>-->
  <!-- <Test12 /> -->
  <!--  <Test13 />-->
  <!-- <Test14 /> -->
  <!-- <Test15 /> -->
  <!-- <Test16 /> -->
  <!-- <Test17 /> -->
  <!-- <Test18 /> -->
  <!-- <Test19 /> -->
  <!-- <Test20 /> -->
  <!-- <Test21 /> -->
  <!-- <Test22 /> -->
  <Test23 />
</main>

<style>
</style>
