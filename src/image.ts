export const getImageData = (src: string): Promise<ImageData> => new Promise(resolve => {
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
