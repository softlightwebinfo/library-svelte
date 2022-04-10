<script>
  import "$lib/style.scss";
  import Input from "$lib/components/Input.svelte";
  import Button from "$lib/components/Button.svelte";

  let value = "";
  const onClick = () => value = "";
</script>

<Input
  autofocus
  bind:value
  placeholder="Escribe aquí tu pregunta"
/>
{value}
<Button on:click={onClick}>Clear input</Button>
<div>
  <Input
    disabled
  />
</div>
