import simpleKnotSrc from "./samples/SimpleKnot.png";
import { getImageData } from "./image";
import { preview } from "./preview";
import { Vector } from "./vector";

const SIZE = new Vector(5, 5);
const STRIDE = new Vector(3, 3);

const main = async () => {
  const imageData = await getImageData(simpleKnotSrc);

  const previewDiv = document.createElement("div");
  const previewTitle = document.createElement("h1");
  previewTitle.innerText = "Preview";
  previewDiv.appendChild(previewTitle);
  previewDiv.appendChild(preview(imageData));

  document.body.appendChild(previewDiv);
};

main().catch();
