<script>
  import { fade, fly } from 'svelte/transition'
  let visible = true
  let flyVisible = true
  let InAndOutVisible = true
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:fade>Fades in and out</p>
{/if}

<label>
  <input type="checkbox" bind:checked={flyVisible} />
  flyVisible
</label>

{#if flyVisible}
  <p transition:fly={{ y: 200, duration: 2000 }}>Fades in and out</p>
{/if}

<label>
  <input type="checkbox" bind:checked={InAndOutVisible} />
  flyVisible
</label>

{#if InAndOutVisible}
  <p out:fly={{ y: 200, duration: 2000 }} in:fade>InAndOutVisible</p>
{/if}
