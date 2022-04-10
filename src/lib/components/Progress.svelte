<script>
  export let value = 0;
</script>

<div class="Progress">
  <div class="Progress__bar" style="width: {value}%; height:6px;" role="progressbar">
    <span class="sr-only">{value}% Complete</span>
  </div>
</div>

<style lang="scss">
  .Progress {
    display: flex;
    height: 5px;
    overflow: hidden;
    font-size: .65625rem;
    background-color: rgba(120, 130, 140, .13);
    border-radius: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
  }

  .Progress__bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #707cd2;
    transition: width .6s ease;
  }

  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
</style>
