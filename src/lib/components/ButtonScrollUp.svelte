<script>
  const onClick = () => {
    window.scrollTo(0, 0);
  }
</script>
<button on:click={onClick}>
  <i class="fa fa-chevron-up" aria-hidden="true"></i>
</button>
<style lang="scss">
  button {
    $s: 40px;
    border-radius: $s;
    width: $s;
    height: $s;
    background-color: var(--primary);
    position: fixed;
    bottom: var(--button-scroll-up_bottom, 20px);
    right: var(--button-scroll-up_bottom, 20px);
    transition: all .3s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: gainsboro;
    }
  }
</style>
