<script>
  import {fade} from 'svelte/transition';

  export let open = false;
</script>
{#if open}
  <div class:open on:click transition:fade></div>
{/if}
<style>
    div {
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease-in-out;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: pointer;
    }
</style>
