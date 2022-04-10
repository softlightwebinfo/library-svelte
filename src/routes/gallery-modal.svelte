<script>
  import "../lib/style.scss";
  import GalleryModal from "$lib/components/GalleryModal.svelte";
  import {getRandomInt} from "$lib/functions";

  let images = [
    "https://via.placeholder.com/1024x600.png?text=Yavor",
    "https://via.placeholder.com/1024x600.png?text=Rafa",
    "https://via.placeholder.com/400x800.png?text=Noah",
    "https://via.placeholder.com/2000x1100.png?text=Ruja",
  ];

  let open = false;
  let random = 2;
  const openModal = () => {
    open = true;
    random = getRandomInt(0, images.length);
  };
  const onClose = () => open = false;
</script>
<button on:click={openModal}>Abrir modal</button>
<div>
  <GalleryModal
    indexDefault="{random}"
    {images}
    {open}
    on:close={onClose}
  />
</div>
<style>
</style>
