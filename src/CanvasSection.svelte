<script lang="ts">
  import { onMount } from 'svelte';

  export let images: HTMLImageElement[] = [];

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let canvasContainer: HTMLDivElement;
  let isCanvasReady: boolean = false;

  let width: number = 0;
  let height: number = 0;
  let headerHeight: number = 150;
  let margin: number = 100;
  let spaceBetweenRows: number = 30;

  let title: string = '';
  let subtitle: string = '';

  let imagesPerRow: number = 2;
  let selectOptions: number[] = [];

  $: {
    selectOptions = getSelectOptions(images.length);
    drawText(title, subtitle);
  }

  onMount(() => {
    canvasContainer = document.getElementById('canvas-container') as HTMLDivElement;
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
  });

  function getSelectOptions(size: number): number[] {
    if (size === 0) {
      return [];
    }
    if (size === 1) {
      return [1];
    }

    return [
      2,
      size,
      ...Array.from(Array(images.length - 1).keys())
        .map(n => n + 1)
        .filter(n => n != 2)
    ];
  }

  function generate(): void {
    if (!images.length || !canvasContainer || !canvas) {
      return;
    }
    const numberOfRows: number = Math.ceil(images.length / imagesPerRow);
    headerHeight = title || subtitle ? 150 : 0;
    width = images[0].width * imagesPerRow + margin;
    height = images[0].height * numberOfRows + spaceBetweenRows * (numberOfRows - 1) + headerHeight + margin;
    canvas.width = width;
    canvas.height = height;
    canvasContainer.style.width = width + 'px';
    canvasContainer.style.height = height + 'px';
    isCanvasReady = true;
    drawSheet();
    drawText(title, subtitle);
  }

  function drawText(name: string, author: string): void {
    if (!isCanvasReady) {
      return;
    }

    if ((!name && !author && headerHeight !== 0) || ((name || author) && headerHeight === 0)) {
      generate();
      return;
    }

    ctx.clearRect(0, 0, width, headerHeight);
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    if (name) {
      ctx.font = 'bold 48px serif';
      ctx.fillText(name, width / 2, 50);
    }
    if (author) {
      ctx.font = '30px serif';
      ctx.fillText(author, width / 2, 100);
    }
  }

  function imagesPerRowChange(event: { target: { value: string } }) {
    imagesPerRow = +event.target.value;
    if (isCanvasReady) {
      generate();
    }
  }

  function drawSheet(): void {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    let dx: number = 0;
    let dy: number = headerHeight + margin / 2;
    for (const [index, image] of images.entries()) {
      if (index % imagesPerRow == 0) {
        dx = margin / 2;
      }
      if (index % imagesPerRow == 0 && index != 0) {
        dy += image.height + spaceBetweenRows;
      }
      ctx.drawImage(image, dx, dy);
      dx += image.width;
    }
  }

  function downloadAsPng(): void {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    if (title && subtitle) {
      a.download = `${title} - ${subtitle}`;
    } else if (title || subtitle) {
      a.download = title || subtitle;
    } else {
      a.download = 'my-sheet';
    }
    a.download += '.png';
    a.click();
  }
</script>

<style>
  #canvas-container {
    width: 100%;
    margin: 0 auto;
    box-sizing: content-box;
  }

  .display-none {
    display: none !important;
  }
</style>

<section class="section is-size-5">
  <h1 class="title">Generate the sheet music</h1>
  <hr />
  <div class="field">
    <label class="label is-medium" for="title">Title</label>
    <div class="control">
      <input
        id="title"
        class="input is-medium"
        type="text"
        placeholder="Ode to joy"
        bind:value={title}
        disabled={!images.length} />
    </div>
  </div>
  <div class="field">
    <label class="label is-medium" for="subtitle">Subtitle</label>
    <div class="control">
      <input
        id="subtitle"
        class="input is-medium"
        type="text"
        placeholder="Beethoven"
        bind:value={subtitle}
        disabled={!images.length} />
    </div>
  </div>
  <div class="field mb-5">
    <label class="label is-medium" for="imagesPerRow">Number of images per row</label>
    <div class="select">
      <select
        id="imagesPerRow"
        disabled={!images.length}
        value={imagesPerRow.toString()}
        on:change={imagesPerRowChange}>
        {#each selectOptions as option}
          <option>{option}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="is-flex">
    <button on:click={generate} class="button is-primary" disabled={!images.length}>Generate</button>
    <button on:click={downloadAsPng} class="button is-primary ml-2" disabled={!isCanvasReady}>Download as PNG</button>
  </div>

  <div class="mt-6" class:display-none={!isCanvasReady} style="overflow: auto;">
    <div id="canvas-container" class="box"><canvas id="canvas" /></div>
  </div>
</section>
