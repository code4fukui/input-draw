import { createCanvasEx } from "./createCanvasEx.js";

export class DemoDraw extends HTMLElement {
  constructor() {
    super();
    const c = createCanvasEx();
    c.style.width = "100%";
    c.style.height = "100%";
    this.appendChild(c);
    this.canvas = c;
    c.redraw();

    // マウスやタッチされた場所
    let mx = 0;
    let my = 0;
    c.draw = (g, cw, ch) => { // cw ch は画面の幅高さ、gを使って描画
      // Canvas API https://developer.mozilla.org/ja/docs/Web/API/Canvas_API
      // + extendGraphics https://js.sabae.cc/extendGraphics.js
      
      // 全部真っ白にクリア
      g.setColor(255, 255, 255);
      g.fillRect(0, 0, cw, ch);
      
      // 20コ、カラフルな円塗りつぶし
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * cw;
        const y = Math.random() * ch;
        const r = Math.random() * (cw / 10);
        const hue = Math.random() * 360;
        g.setColorHSL(hue, 1, .9);
        g.fillCircle(x, y, r);
      }

      // 画面中央からマウスやタッチの場所に向かって矢印
      const cx = cw / 2;
      const cy = ch / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const th = Math.atan2(dy, dx) / Math.PI * 180;
      g.setColorHSL(th, 1, 0.5);
      g.fillArrow(cx, cy, mx, my, 30, 100);

      // 画面中央に文字
      g.setFontSize(cw / 20);
      g.setColorHSL(0, 0.5, 0);
      g.fillTextCenter("demo-draw.js", cx, cy);
    };
    // マウスやタッチで再描画
    c.onuimove = (x, y) => {
      mx = x;
      my = y;
      c.redraw();
    };
    /*
    if (opts) {
      for (const name in opts) {
        if (opts[name] != null) {
          this.setAttribute(name, opts[name]);
        }
      }
    }
    */
  }
  get value() {
    return this.canvas.toDataURL("image/png");
  }
  /*

  set value(urls) {
    if (urls == null || urls.length === 0) {
      return;
    }
    const uploadurl = this.getAttribute("uploadurl");
    const url = urls.split(",");
    for (const n of url) {
      const imgup = new ImageUploader(uploadurl);
      imgup.setImage(n);
      this.imgc.appendChild(imgup);
    }
  }
  */
};

customElements.define("demo-draw", DemoDraw);
