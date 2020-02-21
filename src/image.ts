import { range, take } from "./array-util";
import { vec, Vector } from "./vector";

export const getImageData = (src: string): Promise<ImageData> =>
  new Promise(resolve => {
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

export type Pixel = [number, number, number, number];
export type PixelData = {
  pixels: Pixel[];
  size: Vector;
};
export const convertToPixels = (imageData: ImageData): PixelData => {
  const pixels = Array.from(take(4)([...imageData.data] as number[])).filter(
    (pixel): pixel is Pixel => pixel.length === 4
  );

  return {
    pixels,
    size: vec(imageData.width, imageData.height)
  };
};

export const sample = (
  pixelData: PixelData,
  position: Vector,
  size: Vector
): PixelData => {
  const pixels: Pixel[] = range(size.x * size.y).map(i => pixelData.pixels[position.y * pixelData.size.x +  position.x + ]);

  return {
    pixels,
    size
  };
};
