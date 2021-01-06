<script lang="ts">
  import GetImages from './GetImagesSection.svelte';
  import CanvasSection from './CanvasSection.svelte';

  let images: HTMLImageElement[] = [];

  function imagesEvent(event: CustomEvent<HTMLImageElement[]>) {
    images = event.detail;
  }
</script>

<section class="section">
  <div class="container">
    <GetImages on:images={imagesEvent} />
    <CanvasSection {images} />
  </div>
</section>
