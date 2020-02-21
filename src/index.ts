import simpleKnotSrc from "./samples/SimpleKnot.png";
import { convertToPixels, getImageData } from "./image";
import { preview } from "./preview";
import { vec } from "./vector";
import { waveFunctionCollapse2d } from "./wave-function-collapse";

const SIZE = vec(5, 5);
const STRIDE = vec(1, 1);

const main = async () => {
  const imageData = await getImageData(simpleKnotSrc);
  const pixelData = convertToPixels(imageData);

  const previewDiv = document.createElement("div");
  const previewTitle = document.createElement("h1");
  previewTitle.innerText = "Preview";
  previewDiv.appendChild(previewTitle);
  previewDiv.appendChild(preview(pixelData));

  document.body.appendChild(previewDiv);

  const superpositionTilePixelData = waveFunctionCollapse2d(pixelData, SIZE, STRIDE);

  const tilePreviewDiv = document.createElement("div");
  tilePreviewDiv.appendChild(preview(superpositionTilePixelData));
  document.body.appendChild(tilePreviewDiv);
};

main().catch();
