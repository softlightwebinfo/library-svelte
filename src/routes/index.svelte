<script>
  import Carousel from "$lib/components/Carousel.svelte";
  import "../lib/style.scss";

  let images = [
    "https://via.placeholder.com/1920x600.png?text=1",
    "https://via.placeholder.com/1920x600.png?text=2",
    "https://via.placeholder.com/1920x600.png?text=3",
    "https://via.placeholder.com/1920x600.png?text=4",
    "https://via.placeholder.com/1920x600.png?text=5",
  ];
</script>

<Carousel {images}/>
