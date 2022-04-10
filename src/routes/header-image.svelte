<script>
  import "../lib/style.scss";
  import HeaderImage from "$lib/components/HeaderImage.svelte";

  let image = "https://api.emprendimos.com/images/sliders/73ab57cce19cd8fe43dc298e02e95965.jpg";

  const title = [
    "Digitalizate",
    "{data} para todas",
    "las empresas y negocios"
  ];
  const colors = ["#ff4c4c", "#aea0ff", "#b5ffbe", "#bdfd74"];
  const data = {
    title: ["fácil", "simple", "rápido", "económico"],
    colors,
  };
  const description = "Ya tienes disponible lo que buscabas para tu empresa o negocio, facil y rápido de administrar";
  const button = "Digitaliza tu empresa o negocio";
  const buttonLink = "/";
  const imageRight = "https://emprendimos.com/static/images/mobile.png";
</script>
<div>
  <HeaderImage
    time="2000"
    {data}
    {image}
    {title}
    {description}
    {button}
    {buttonLink}
    {imageRight}
  />
</div>
<style>
</style>
