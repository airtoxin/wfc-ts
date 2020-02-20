import { enumerate, take } from "./array-util";

export const getImageData = (src: string): Promise<ImageData> => new Promise(resolve => {
  const img = new Image();
  img.src = src;
  img.addEventListener("load", () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);

    resolve(ctx.getImageData(0, 0, img.width, img.height));
  });
});

export type PixelData = [number, number, number, number];
export const getPixels = (imageData: ImageData): PixelData[][] => {
  const pixels: ReturnType<typeof getPixels> = [];

  for (const [i, rgba] of enumerate(take(4)([...imageData.data]))) {
    const x = i % imageData.width;
    const y = Math.floor(i / imageData.width);

    if (pixels[y] == null) {
      pixels[y] = [];
    }
    pixels[y][x] = rgba as PixelData;
  }

  return pixels;
};
