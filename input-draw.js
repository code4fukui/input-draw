import { createCanvasEx } from "./createCanvasEx.js";

export class InputDraw extends HTMLElement {
  constructor(opts) {
    super();
    if (opts) {
      for (const name in opts) {
        if (opts[name] != null) {
          this.setAttribute(name, opts[name]);
        }
      }
    }

    const c = createCanvasEx();
    c.style.width = "100%";
    c.style.height = "100%";
    this.appendChild(c);
    this.canvas = c;
    c.redraw();

    this.clear();

    const g = c.g;

    let mxbk = null;
    let mybk;
    const pnts = [];

    c.onuidown = (x, y) => {
      mxbk = x;
      mybk = y;
      this._setPen(g);
      //g.drawLine(x, y, x + 1, y + 1);
      const r = this.penWidth / 2;
      g.fillCircle(x, y, r);
      pnts.push({ x, y });
    };
    c.onuimove = (x, y) => {
      if (mxbk === null) return;
      this._setPen(g);
      pnts.push({ x, y });
      //g.drawLine(mxbk, mybk, x, y);
      g.drawPolyline(pnts);
      mxbk = x;
      mybk = y;
    };
    c.onuiup = (x, y) => {
      mxbk = null;
      pnts.length = 0;
    };
  }
  _setPen(g) {
    g.setColor(this.color);
    g.setLineWidth(this.penWidth);
  }
  set color(s) {
    this.setAttribute("color", s);
  }
  get color() {
    return this.getAttribute("color") || "black"
  }
  set penWidth(n) {
    this.setAttribute("pen-width", n);
  }
  get penWidth() {
    return parseInt(this.getAttribute("pen-width") || "1");
  }
  clear() {
    const g = this.canvas.g;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    g.setColor(255, 255, 255);
    g.fillRect(0, 0, cw, ch);
  }
  get value() {
    return this.canvas.toDataURL("image/png");
  }
  set value(data) {
    const img = new Image();
    img.src = data;
    img.onload = () => {
      this.canvas.g.drawImage(img, 0, 0);
    };
  }
};

customElements.define("input-draw", InputDraw);
