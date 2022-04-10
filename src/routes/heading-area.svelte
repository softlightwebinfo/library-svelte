<script>
  import "$lib/style.scss";
  import HeadingArea from "$lib/components/HeadingArea.svelte";

  let title = "We are megaone company";
  let subTitle = "We are making ideas better for everyone";
  let description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n" +
    "        some\n" +
    "        form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use\n" +
    "        a\n" +
    "        passage of Lorem Ipsum.";
  let image = "https://megaone.acrothemes.com/agency/img/vector-art-2.png";
</script>

<HeadingArea
  {title}
  {subTitle}
  {description}
  {image}
/>
