<script>
  export let time = 2000;
  export let data = {};
  export let image = "";
  export let title = "";
  export let imageRight = "";
  export let buttonLink = "/";
  export let description = "";
  export let button = "";
  let index = 0;
  let clear;
  $:_color = data?.colors[index] ?? "red";

  const incr = () => {
    index = index >= data?.title?.length - 1 ? 0 : index + 1;
  }

  $: {
    clearInterval(clear)
    clear = setInterval(incr, time)
  }

  $:getData = (title) => {
    if (data) {
      title = title.replaceAll("{data}", `<span style="color:${_color}">${data.title[index]}</span>`)
    }
    return title;
  }

</script>

<div class="HeaderImage">
  <div class="HeaderImage__section">
    <div class="HeaderImage__action animate__animated animate__backInLeft">
      <h1>
        {#each title as item, index}
          <div>{@html getData(item)}</div>
        {/each}
      </h1>
      <h2>{description}</h2>
      <div>
        <a href="{buttonLink}">{button}</a>
      </div>
    </div>
    <img src={imageRight} alt="phone" class="animate__animated animate__backInRight"/>
  </div>
  <img src={image} alt="phone"/>
</div>

<style lang="scss">
  .HeaderImage {
    background: #000;
    position: relative;
    margin: 0;
    overflow: hidden;

    div {
      text-align: left;
    }

    > img {
      object-fit: cover;
      opacity: 0.4;
    }

    > img,
    & {
      height: 100vh;
      width: 100%;
    }

    &__action {
      float: left;
      color: #fff;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      padding-bottom: 0;
      padding: 20px;
      text-align: left;
      @media (max-width: 1125px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }

    &__section {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      z-index: 1;

      img {
        position: relative !important;
        height: 80vh !important;
        width: unset !important;
        z-index: 99999999999 !important;
        float: right;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100vw;
        height: 72% !important;
        bottom: 0;
        justify-self: flex-end;
        align-self: self-end;
        margin-bottom: 40px;
        object-fit: cover;
        @media(max-width: 1125px) {
          display: none !important;
        }
      }
    }
  }

  h1 {
    color: #fff;
    font-size: 3.8em;
    font-weight: 700;
    line-height: 1.1em;
    padding-bottom: 30px;
    text-align: left;
    @media (max-width: 1125px) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      font-size: 2.5em;
    }
  }

  h1 {
    text-shadow: 0 1px 0 #484848;
    text-align: left;
    @media (max-width: 1125px) {
      text-align: center;
    }
  }

  h2 {
    font-weight: 400;
    line-height: 1.5em;
    font-size: 1.2em;
    margin-bottom: 2em;
    color: #fff;
    text-align: left;
    @media (max-width: 1125px) {
      text-align: center;
    }
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }

  a {
    font-family: inter, sans-serif;
    font-weight: 500;
    font-size: 1.15rem;
    line-height: 1.5;
    padding: 60px;
    border-radius: 40px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    background-color: #1877f2;
    border-color: #1877f2;
    padding: 0.5rem 1.375rem;
    line-height: 1.5;
    box-shadow: 0 10px 16px 0 rgb(77 91 237 / 20%);
    color: white;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
</style>
