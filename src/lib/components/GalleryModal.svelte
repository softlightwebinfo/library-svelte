<script>
  import Arrow from "$lib/components/Arrow.svelte";
  import {handleImageChange} from "$lib/functions";
  import {createEventDispatcher} from "svelte";
  import {fade} from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let indexDefault = 0;
  let index = indexDefault;

  $:{
    index = indexDefault;
  }

  export let images = [];
  export let open = false;
  $:currentImage = images[index];

  const onClose = (e) => {
    dispatch("close", e)
  }
</script>

{#if open}
  <div class="Modal" transition:fade>
    <button on:click={onClose}><i class="fa fa-times"></i></button>
    <Arrow left on:click={() => index = handleImageChange(index, images, "backward")}/>
    <img src="{currentImage}" alt="">
    <Arrow on:click={() => index = handleImageChange(index, images, "forward")}/>
  </div>
{/if}
<style lang="scss">
  div.Modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.80);
  }

  button {
    $size: 35px;
    position: fixed;
    top: 20px;
    right: 20px;
    border-radius: $size;
    width: $size;
    height: $size;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      opacity: .8;
      transform: rotate(5deg);
    }
  }

  img {
    margin: auto;
    display: block;
    max-width: 100%;
    max-height: 95%;
    width: auto;
  }
</style>
