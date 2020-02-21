import { enumerate, range } from "./array-util";
import { convertToPixels } from "./image";

export const preview = (imageData: ImageData): HTMLElement => {
  const imageDiv = document.createElement("div");
  const divs: HTMLDivElement[][] = [];
  for (const y of range(imageData.height)) {
    const row: HTMLDivElement[] = [];
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "display: flex;");
    for (const x of range(imageData.width)) {
      const div = document.createElement("div");
      div.id = `${y}_${x}`;
      div.style.width = "1em";
      div.style.height = "1em";
      rowDiv.appendChild(div);
      row.push(div);
    }
    divs.push(row);
    imageDiv.appendChild(rowDiv);
  }

  for (const [y, pixelRow] of enumerate(convertToPixels(imageData))) {
    for (const [x, [r, g, b, a]] of enumerate(pixelRow)) {
      divs[y][x].style.backgroundColor = `rgba(${r},${g},${b},${a})`;
    }
  }

  return imageDiv;
};
