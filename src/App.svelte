<script lang="ts">
  import GetImages from './GetImagesSection.svelte';
  import CanvasSection from './CanvasSection.svelte';
  import CorsSection from './CorsSection.svelte';

  let images: HTMLImageElement[] = [];

  function imagesEvent(event: CustomEvent<HTMLImageElement[]>) {
    images = event.detail;
  }
</script>

<section class="section">
  <div class="container">
    <CorsSection />
    <GetImages on:images={imagesEvent} />
    <CanvasSection {images} />
  </div>
</section>
