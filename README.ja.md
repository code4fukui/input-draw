# input-draw

`input-draw`は、マウスやタッチスクリーンで描画できるカスタムHTMLエレメントです。描画内容はデータURLで取得できます。

## デモ
https://code4fukui.github.io/input-draw/

## 機能
- マウスやタッチによる描画
- 線の色や太さの設定
- 描画内容のデータURL取得
- 描画のクリア

## 使い方
```html
<script type="module" src="https://code4fukui.github.io/input-draw/input-draw.js"></script>
<input-draw color=red pen-width=20 style="display:block;border:1px solid black;width:100%;height:80vh;" id=draw></input-draw>
```

## ライセンス
MIT License