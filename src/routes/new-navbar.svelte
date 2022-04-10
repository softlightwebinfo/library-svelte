<script>
  import "$lib/style.scss";
  import Item from "$lib/components/Item.svelte";
  import NavbarCustom from "$lib/components/NavbarCustom.svelte";
</script>

<NavbarCustom>
  <img src="https://emprendimos.com/static/images/logos/header.png" alt="" slot="logo">
  <svelte:fragment slot="top">
    Inicio
  </svelte:fragment>
  <svelte:fragment slot="bottom">
    Bottom
  </svelte:fragment>
  <svelte:fragment slot="menu">
    <Item>Hola mundo</Item>
    <Item>Hola mundo</Item>
    <Item>Hola mundo</Item>
  </svelte:fragment>
</NavbarCustom>
