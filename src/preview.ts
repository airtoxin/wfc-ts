import { enumerate, range } from "./array-util";
import { PixelData } from "./image";

export const preview = (pixelData: PixelData): HTMLElement => {
  const imageDiv = document.createElement("div");
  const divs: HTMLDivElement[] = [];
  for (const y of range(pixelData.size.y)) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "display: flex;");
    for (const x of range(pixelData.size.x)) {
      const div = document.createElement("div");
      div.id = `${y}_${x}`;
      div.style.width = "1em";
      div.style.height = "1em";
      rowDiv.appendChild(div);
      divs.push(div);
    }
    imageDiv.appendChild(rowDiv);
  }

  for (const [i, [r, g, b, a]] of enumerate(pixelData.pixels)) {
    divs[i].style.backgroundColor = `rgba(${r},${g},${b},${a})`;
  }

  return imageDiv;
};
