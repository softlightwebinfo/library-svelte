<script lang="ts">
    import Arrow from "$lib/components/Arrow.svelte";
    import { handleImageChange } from "$lib/functions";

    export let images: string[] = [];
    let index = 0;
    let start = true;
    $: image = images[index];

    setInterval(() => {
        if (!start) return;
        index = handleImageChange(index, images, "forward");
    }, 3000);
</script>

<div class="carousel" on:mouseenter={() => start = false} on:mouseleave={() => start=true}>
  <Arrow left on:click={() => index = handleImageChange(index, images, "backward")}/>
  <div class="content">
    <img src="{image}" alt="">
  </div>
  <Arrow on:click={() => index = handleImageChange(index, images, "forward")}/>
</div>

<style lang="scss">
  .carousel {
    position: relative;
    user-select: none;
  }

  .content {
    width: 100%;

    img, & {
      height: 600px;
      object-fit: cover;

      @media (max-width: 800px) {
        height: 500px;
      }

      @media (max-width: 600px) {
        height: 400px;
      }

      @media (max-width: 500px) {
        height: 300px;
      }
    }
  }
</style>
