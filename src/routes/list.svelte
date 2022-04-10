<script>
  import List from "$lib/components/List.svelte";
  import ListItem from "$lib/components/ListItem.svelte";
</script>

<List>
  <ListItem title="List group item heading" small="3 days ago">
    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </ListItem>
  <ListItem title="List group item heading" small="3 days ago">
    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </ListItem>
  <ListItem title="List group item heading" small="3 days ago">
    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </ListItem>
  <ListItem title="List group item heading" small="3 days ago">
    <p> Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </ListItem>
</List>

<style lang="scss" global>
  @import "../lib/style.scss";
</style>
