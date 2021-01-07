export async function downloadImages(url: string): Promise<HTMLImageElement[]> {
  const images: HTMLImageElement[] = [];
  const requestsByCycle: number = 5;
  let cycle: number = 0;

  while (true) {
    const promises: Promise<void>[] = [];
    for (let i: number = cycle * requestsByCycle; i < (cycle + 1) * requestsByCycle; i++) {
      const promise: Promise<void> = loadImage(url + `${i}.png`).then((image: HTMLImageElement) => {
        images[i] = image;
      });
      promises.push(promise);
    }

    const results: PromiseSettledResult<void>[] = await Promise.allSettled(promises);
    if (results.some((res: PromiseSettledResult<void>) => res.status == 'rejected')) {
      break;
    }
    cycle++;
  }

  return images;
}

export function loadImage(src): Promise<HTMLImageElement> {
  return new Promise(function (resolve, reject) {
    const image: HTMLImageElement = Object.assign(document.createElement('img'));

    function cleanup() {
      image.onload = null;
      image.onerror = null;
    }

    image.onload = function () {
      cleanup();
      resolve(image);
    };
    image.onerror = function () {
      cleanup();
      reject(new Error('Failed to load the image "' + src + '"'));
    };

    image.src = src;

    image.crossOrigin = 'anonymous';
  });
}
