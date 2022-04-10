<script>
  import Accordion from '$lib/components/accordion.svelte';

  const data = {
    'foo': [1, 2, 3],
    'bar': [4, 5, 6, 7, 8, 9, 10, 11],
    'baz': [12, 24, 42]
  }
</script>
{#each Object.entries(data) as [key, entry]}
  <Accordion title={key}>
    <div>Hola, que tal {entry.length}</div>
  </Accordion>
{/each}
<style lang="scss" global>
  @import "../lib/style.scss";
</style>
