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

  $: if (flowkeyUrl || true) {
    downloadError = false;
  }

  let downloadError: boolean = false;
  let downloadSuccess: boolean = false;

  function testUrl(url: string): boolean {
    const urlRegex: RegExp = /^(https:\/\/flowkeycdn.com\/sheets\/.*\/\d+\/)(\d+.png)$/;
    const result: RegExpExecArray | null = urlRegex.exec(url);

    if (!result) {
      return false;
    }
    urlFirstPart = result[1];
    return true;
  }

  let isLoading = false;
  async function getImages(): Promise<void> {
    isLoading = true;
    images = await downloadImages(urlFirstPart);
    if (images.length === 0) {
      downloadError = true;
    } else {
      downloadSuccess = true;
    }
    isLoading = false;
  }

  function resetMessages(): void {
    downloadError = false;
    downloadSuccess = false;
  }
</script>

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
            on:input={resetMessages}
            class:is-success={isUrlValid && flowkeyUrl !== ''}
            class:is-danger={(!isUrlValid && flowkeyUrl !== '') || downloadError}
          />
        </div>
        {#if !isUrlValid && flowkeyUrl !== ''}
          <p class="help is-danger is-size-6 mb-2">The URL is not valid</p>
        {/if}
        {#if downloadError}
          <p class="help is-danger is-size-6 mb-2">An error occurred</p>
        {/if}
        {#if downloadSuccess}
          <p class="help is-success is-size-6 mb-2">Done.</p>
        {/if}
        <button on:click={getImages} disabled={!isUrlValid} class="button is-primary mt-3" class:is-loading={isLoading}>
          Load images
        </button>
      </div>
    </div>
    <div class="column">
      <div class="is-flex is-justify-content-center"><img class="image" src="flowkey-screen.png" alt="" /></div>
    </div>
  </div>
</section>
