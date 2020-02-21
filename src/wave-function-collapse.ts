import { Pixel, PixelData, sample } from "./image";
import { vec, Vector } from "./vector";
import { range } from "./array-util";

export const waveFunctionCollapse2d = (
  pixelData: PixelData,
  sampleSize: Vector,
  stride: Vector
) => {
  const tiles = range(
    (pixelData.pixels.length - sampleSize.y) / stride.y
  ).flatMap(sy =>
    range((pixelData.pixels[0].length - sampleSize.x) / stride.x).map(sx =>
      sample(pixelData.pixels, vec(sx, sy), sampleSize)
    )
  );
  const superpositionTile: PixelData = tiles.reduce((accTile, tile) => ({
    ...accTile,
    pixels: accTile.pixels.map((pixel, i) => pixel.map((v, pi) => v + tile.pixels[i][pi]) as Pixel)
  }));
  const normalizedSuperpositionTile: PixelData = {
    ...superpositionTile,
    pixels: superpositionTile.pixels.map(pixel => pixel.map(p => p / superpositionTile.pixels.length)) as Pixel[]
  };

  return normalizedSuperpositionTile;
};
