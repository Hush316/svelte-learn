<script>
    import { onMount } from 'svelte';
    import {onInterval} from '../utils/Interval'
    let photos = [];
    let seconds = 0
    onInterval(() => seconds += 1, 1000);
    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        photos = await res.json();
    });
</script>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }

    figure, img {
        width: 100%;
        margin: 0;
    }
</style>

<p>
    The page has been open for
    {seconds} {seconds === 1 ? 'second' : 'seconds'}
</p>
<h1>Photo album</h1>

<div class="photos">
    {#each photos as photo}
        <figure>
            <img src={photo.thumbnailUrl} alt={photo.title}>
            <figcaption>{photo.title}</figcaption>
        </figure>
    {:else}
        <!-- this block renders when photos.length === 0 -->
        <p>loading...</p>
    {/each}
</div>
