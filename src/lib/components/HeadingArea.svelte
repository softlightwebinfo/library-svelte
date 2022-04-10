<script>
  import Section from "$lib/components/Section.svelte";
  import SubTitle from "$lib/components/SubTitle.svelte";
  import Title from "$lib/components/Title.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Container from "$lib/components/Container.svelte";

  export let title;
  export let subTitle;
  export let description;
  export let image;
</script>

<Section class="HeadingAreaSection">
  <Container>
    <div>
      <SubTitle title="{subTitle}"/>
      <Title title="{title}"/>
      <Paragraph>
        {description}
      </Paragraph>
    </div>
    <img src="{image}" alt="">
  </Container>
  <slot></slot>
</Section>
<style lang="scss">
  div {
    flex: 1;
  }

  :global(.HeadingAreaSection) :global(.Container) {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      text-align: center;
    }

    img {
      max-width: 400px;
      height: fit-content;
      @media (max-width: 768px) {
        margin: auto;
      }
    }
  }
</style>
