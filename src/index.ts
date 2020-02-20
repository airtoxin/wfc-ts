import simpleKnotSrc from "./samples/SimpleKnot.png";
import { getImageData } from "./image";
import { preview } from "./preview";

const main = async () => {
  const imageData = await getImageData(simpleKnotSrc);

  const previewDiv = document.createElement("div");
  const previewTitle = document.createElement("h1");
  previewTitle.innerText = "Preview";
  previewDiv.appendChild(previewTitle);
  preview(previewDiv, imageData);

  document.body.appendChild(previewDiv);
};

main().catch();
