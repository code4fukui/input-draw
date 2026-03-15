# input-draw

input-draw は、マウスやタッチによる描画が可能なHTMLの拡張タグです。描画結果はエンコードデータプロトコルで保存されます。

## デモ
https://code4fukui.github.io/input-draw/

## 機能
- マウスやタッチによる描画
- 線の色や太さの設定
- 描画内容のデータURL取得

## 使い方
```html
<script type="module" src="https://code4fukui.github.io/input-draw/input-draw.js"></script>
<input-draw color=red pen-width=20 style="display:block;border:1px solid black;width:100%;height:80vh;" id=draw></input-draw>
```

## ライセンス
MIT License