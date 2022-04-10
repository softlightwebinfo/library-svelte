<section class="{$$props.class}">
  <slot></slot>
</section>
<style lang="scss">
  section {
    padding: 80px;
    background: white;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
</style>
