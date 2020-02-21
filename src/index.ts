import simpleKnotSrc from "./samples/SimpleKnot.png";
import { convertToPixels, getImageData } from "./image";
import { preview } from "./preview";
import { vec } from "./vector";
import { waveFunctionCollapse2d } from "./wave-function-collapse";

const SIZE = vec(5, 5);
const STRIDE = vec(1, 1);

const main = async () => {
  const imageData = await getImageData(simpleKnotSrc);

  const previewDiv = document.createElement("div");
  const previewTitle = document.createElement("h1");
  previewTitle.innerText = "Preview";
  previewDiv.appendChild(previewTitle);
  previewDiv.appendChild(preview(imageData));

  document.body.appendChild(previewDiv);

  waveFunctionCollapse2d(convertToPixels(imageData), SIZE, STRIDE)
};

main().catch();
