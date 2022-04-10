<script>
  import Overlay from "$lib/components/Overlay.svelte";

  export let transparent = false;
  let open = false;
  const toggle = () => open = !open;
</script>
<header class:transparent class:open>
  <Overlay {open} on:click={toggle}/>
  <div class="logo">
    <i on:click={toggle} class="fa fa-bars"></i>
    <slot name="logo"></slot>
  </div>
  <div class="menu animate__animated animate__slideInLeft">
    {#if open}
      <slot name="top"></slot>
    {/if}
    <slot name="menu"></slot>
    {#if open}
      <slot name="bottom"></slot>
    {/if}
  </div>
</header>
<style lang="scss">
  header {
    --animate-duration: .3s;
    background-color: #fff;
    border-bottom: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    padding: 20px;
    z-index: 9;
  }

  .menu {
    transition: all 0.3s ease-in-out;
    display: flex;
    margin-top: 20px;
    @media(max-width: 768px) {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      background: white;
      box-shadow: 0px 0px 10px -10px black;
      top: 0;
      margin: 0;
      max-width: 350px;
      flex-direction: column;
      display: none;
    }

    .open & {
      display: flex;
    }
  }

  .transparent {
    left: 0;
    right: 0;
    position: absolute;
    z-index: 99;
    opacity: 1;
    border: 0;
    background: rgba(255, 255, 255, 0.09);

    i {
      color: white;
      filter: brightness(6.5) drop-shadow(2px 4px 6px black);
    }

    :global(div) {
      @media (min-width: 767px) {
        color: white;
        text-shadow: 2px 2px 6px black;
      }

      &:hover {
        @media (min-width: 767px) {
          color: black;
          text-shadow: none;
        }
      }
    }
  }

  .logo {
    @media(max-width: 768px) {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 30px;
      justify-content: space-between;
      width: 100%;
    }

    i {
      align-items: center;
      gap: 20px;
      font-size: 30px;
      display: none;
      cursor: pointer;
      @media(max-width: 768px) {
        display: flex;
      }
    }

    :global(img) {
      margin-right: 1rem;
      height: 60px;
      width: 100%;
      max-width: 400px;
      @media(max-width: 768px) {
        margin: auto;
      }
    }

    .transparent & {
      :global(img) {
        filter: brightness(6.5) drop-shadow(2px 4px 6px black);
      }
    }
  }

</style>
