<script lang="ts">
    export let left: boolean = false;
    $:icon = left ? "fa fa-chevron-left" : "fa fa-chevron-right";
</script>
<div class:left={left} on:click>
  <i class={icon}></i>
</div>

<style lang="scss">
  $pos: 20px;
  div {
    $s: 30px;
    position: absolute;
    width: $s;
    height: $s;
    background-color: black;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    transition: all 0.3s ease-in-out;
    right: $pos;
    left: initial;
    top: 0;
    bottom: 0;
    margin: auto;

    &:hover {
      opacity: .7;
      cursor: pointer;
    }
  }

  .left {
    left: $pos;
    right: initial;
  }
</style>
