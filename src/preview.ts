import { enumerate, range, take } from "./array-util";

export const preview = (element: HTMLElement, imageData: ImageData): void => {
  const imageDiv = document.createElement("div");
  const divs = [];
  for (const y of range(imageData.height)) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "display: flex;");
    for (const x of range(imageData.width)) {
      const div = document.createElement("div");
      div.id = `${y}_${x}`;
      div.style.width = "1em";
      div.style.height = "1em";
      rowDiv.appendChild(div);
      divs.push(div);
    }
    imageDiv.appendChild(rowDiv);
  }

  element.appendChild(imageDiv);

  for (const [i, [r, g, b, a]] of enumerate(take(4)([...imageData.data]))) {
    const div = divs[i];
    div.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
  }
};
