<script>
  export let className = "", style = "";
</script>

<header class={className} style={style}>
  <slot/>
</header>

<style lang="scss">
  header {
    background-color: var(--navbar_bg, var(--primary));
    height: var(--navbar_height);
    display: flex;
    align-items: center;
  }
</style>
