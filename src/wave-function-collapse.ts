import { Pixel, PixelData, sample } from "./image";
import { vec, Vector } from "./vector";
import { range } from "./array-util";

export const waveFunctionCollapse2d = (
  pixelData: PixelData,
  sampleSize: Vector,
  stride: Vector
): PixelData => {
  const tiles = range(
    (pixelData.size.y - sampleSize.y) / stride.y
  ).flatMap(sy =>
    range((pixelData.size.x - sampleSize.x) / stride.x).map(sx =>
      sample(pixelData, vec(sx, sy), sampleSize)
    )
  );
  const superpositionTile: PixelData = tiles.reduce((accTile, tile) => ({
    ...accTile,
    pixels: accTile.pixels.map(
      (pixel, i) => pixel.map((v, pi) => v + tile.pixels[i][pi]) as Pixel
    )
  }));

  return {
    ...superpositionTile,
    // normalize pixel values
    pixels: superpositionTile.pixels.map(pixel =>
      pixel.map(p => p / superpositionTile.pixels.length)
    ) as Pixel[]
  };
};
