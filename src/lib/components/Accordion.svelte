<script>
  import {slide} from "svelte/transition";

  export let title;
  export let reverse = false;
  export let spaceBetween = false;

  let isOpen = false
  const toggle = () => isOpen = !isOpen
</script>
<style>
    button {
        width: 100%;
        display: flex;
        padding: 10px;
        font-size: 18px;
        gap: 10px;
        cursor: pointer;
    }

    .reverse {
        flex-direction: row-reverse;
    }

    .spaceBetween {
        justify-content: space-between;
    }

    svg {
        transition: transform 0.2s ease-in;
    }

    [aria-expanded=true] svg {
        transform: rotate(0.25turn);
    }
</style>
<button on:click={toggle} aria-expanded={isOpen} class:reverse class:spaceBetween>
  <svg width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
       viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 5l7 7-7 7"></path>
  </svg>
  {title}
</button>
{#if isOpen}
  <ul transition:slide={{ duration: 300 }}>
    <slot></slot>
  </ul>
{/if}
