<script>
  import "$lib/style.scss";
  import Banner from "$lib/components/Banner.svelte";
  import Box from "$lib/components/Box.svelte";
  import SubTitle from "$lib/components/SubTitle.svelte";
  import Title from "$lib/components/Title.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<Banner
  image="https://api.emprendimos.com/images/sliders/73ab57cce19cd8fe43dc298e02e95965.jpg"
>
  <Box>
    <SubTitle title="Most Afordable Properties"/>
    <Title title="A beautiful luxuries "/>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper nibh volutpat at. In
      rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed cursus eros ligula non odio. Suspendisse
      volutpat sagittis sapien. Curabitur quis malesuada ipsum.
    </Paragraph>
  </Box>
</Banner>
