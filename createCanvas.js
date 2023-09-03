export const createCanvas = () => {
  const c = document.createElement("canvas");
  c.g = c.getContext("2d");

  const fitSize = () => {
    const p = c.parentElement;
    if (!p) return;
    const w = p.clientWidth;
    const h = p.clientHeight;
    if (c.bkw !== w || c.bkh !== h) {
      const ratio = devicePixelRatio || 1;
      c.style.width = w + "px";
      c.style.height = h + "px";
      const imgd = c.g.getImageData(0, 0, c.width, c.height);
      c.width = Math.floor(w * ratio);
      c.height = Math.floor(h * ratio);
      c.g.putImageData(imgd, 0, 0);
      c.ratio = ratio;
      c.bkw = w;
      c.bkh = h;
    }
  }
  fitSize();
  c.redraw = () => {
    fitSize();
    if (c.draw) {
  		c.draw(c.g, c.width, c.height);
  	}
  };
  addEventListener("resize", () => c.redraw());
  return c;
};
