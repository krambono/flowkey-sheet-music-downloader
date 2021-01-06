<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { downloadImages } from './canvas.utils';

  const dispatch = createEventDispatcher();

  let images: HTMLImageElement[] = [];
  $: dispatch('images', images);

  let urlFirstPart: string = '';

  let flowkeyUrl: string = '';
  let isUrlValid: boolean = false;

  $: isUrlValid = testUrl(flowkeyUrl);

  function testUrl(url: string): boolean {
    const urlRegex: RegExp = /(https:\/\/flowkeycdn.com\/sheets\/.*\/150\/)(\d+.png)/;
    const result: RegExpExecArray | null = urlRegex.exec(url);

    if (!result) {
      return false;
    }
    urlFirstPart = result[1];
    return true;
  }

  let isLoading = false;
  async function getImages() {
    isLoading = true;
    images = await downloadImages(urlFirstPart);
    isLoading = false;
  }
</script>

<style>
  .visibilty-hidden {
    visibility: hidden;
  }
</style>

<section class="section is-size-5">
  <h1 class="title">Get Flowkey URL</h1>
  <hr />
  <div class="columns">
    <div class="column is-three-fifths">
      <div class="block">
        Go to a lesson or a song on Flowkey's website. The sheet music at the bottom of the page is actually a set of
        images. Right click on one of these images and select "Copy image address". Paste the result below :
      </div>
      <div class="field">
        <label class="label is-medium" for="url">URL</label>
        <div class="control">
          <input
            id="url"
            class="input is-medium"
            type="text"
            placeholder="https://flowkeycdn.com/sheets/XXXXXXXX/150/5.png"
            bind:value={flowkeyUrl}
            class:is-success={isUrlValid && flowkeyUrl !== ''}
            class:is-danger={!isUrlValid && flowkeyUrl !== ''} />
        </div>
        <p class="help is-danger is-size-6 mb-2" class:visibilty-hidden={isUrlValid || flowkeyUrl === ''}>
          The URL is not valid
        </p>
        <button on:click={getImages} disabled={!isUrlValid} class="button is-primary" class:is-loading={isLoading}>
          Load images
        </button>
      </div>
    </div>
    <div class="column">
      <div class="is-flex is-justify-content-center"><img class="image" src="/flowkey-screen.png" alt="" /></div>
    </div>
  </div>
</section>
