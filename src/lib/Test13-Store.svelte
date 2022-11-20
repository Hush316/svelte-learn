<script>
  import { count, decrement, incrementer, reset } from '../store/count'
  import { time, elapsed } from '../store/time'

  let count_value
  const unsubscribe = count.subscribe((value) => {
    count_value = value
  })

  const formatter = new Intl.DateTimeFormat('cn', {
    year: 'numeric',
    month: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  })
</script>

<p>
  This page has been open for
  {$elapsed}
  {$elapsed === 1 ? 'second' : 'seconds'}
</p>
<h1>The time is {formatter.format($time)}</h1>

<h1>count 的值是{count_value}</h1>

<div>
  {count_value} <button on:click={incrementer}>+</button> 1
  <button on:click={decrement}>-</button> 1 = {count_value}
</div>
<div>
  {$count} <button on:click={incrementer}>+</button> 1
  <button on:click={decrement}>-</button> 1 = {$count}
</div>
