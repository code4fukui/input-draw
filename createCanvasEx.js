import { createCanvas } from "./createCanvas.js";
import { extendGraphics } from "./extendGraphics.js";
import { extendUI } from "https://js.sabae.cc/extendUI.js";

export const createCanvasEx = () => {
  const c = createCanvas();
  extendGraphics(c.g);
  extendUI(c);
  return c;
};
