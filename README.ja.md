# input-draw

依存関係のない軽量なカスタムHTML要素（`<input-draw>`）です。マウスやタッチ入力に対応したシンプルな描画キャンバスを提供します。

## デモ

- **ライブデモ:** [https://code4fukui.github.io/input-draw/](https://code4fukui.github.io/input-draw/)

デモでは、ペンの色と太さを変更するコントロール、キャンバスをクリアするボタン、および描画データをBase64データURLとして取得・設定するボタンを備えた描画エリアを確認できます。

## 特徴

- **Webコンポーネント:** シンプルでカプセル化された、再利用可能なカスタム要素です。
- **マウス & タッチ対応:** デスクトップとモバイルデバイスの両方でシームレスに動作します。
- **カスタマイズ可能なペン:** HTML属性を使用して、ペンの `color`（色）と `pen-width`（太さ）を簡単に変更できます。
- **データURLのエクスポート/インポート:** `.value` プロパティを通じて、描画内容を `image/png` 形式のデータURLとして取得したり、既存の画像を読み込んだりできます。
- **レスポンシブ:** 親コンテナに合わせて自動的にリサイズされます。
- **シンプルなAPI:** キャンバスをリセットするための `.clear()` メソッドを備えています。

## クイックスタート

1. **ページにスクリプトを追加します。** CDNリンクを直接使用できます。

    ```html
    <script type="module" src="https://code4fukui.github.io/input-draw/input-draw.js"></script>
    ```

2. **HTML内で要素を使用します。**

    ```html
    <input-draw id="drawing-pad" color="blue" pen-width="10" style="border: 1px solid #ccc; width: 100%; height: 400px;"></input-draw>
    ```

## APIリファレンス

### 属性

- `color="<color>"`
  - ペンの色を設定します。有効なCSS色文字列（例: `red`, `#ff0000`, `rgb(255, 0, 0)`）を指定可能です。
  - デフォルト: `black`

- `pen-width="<number>"`
  - ペンの太さ（ピクセル単位）を設定します。
  - デフォルト: `1`

### プロパティ

- `.value`
  - **Get:** 現在のキャンバスの内容を `image/png` 形式のデータURL文字列として返します。
  - **Set:** 有効なデータURLからキャンバスに画像を読み込みます。

### メソッド

- `.clear()`
  - キャンバス全体を白背景にクリアします。

## 例: 全体的なインタラクション

この例では、JavaScriptを使用して `<input-draw>` 要素の属性、プロパティ、メソッドを操作する方法を示します。

```html
<!DOCTYPE html>
<html>
<head>
  <title>input-draw Example</title>
  <script type="module" src="https://code4fukui.github.io/input-draw/input-draw.js"></script>
</head>
<body>

  <!-- The drawing component -->
  <input-draw id="draw" style="display:block; border:1px solid black; width:100%; height:300px;"></input-draw>

  <!-- Controls -->
  <p>
    Color: <input type="color" id="color-input" value="#000000">
    Width: <input type="range" id="width-input" min="1" max="50" value="1">
    <button id="clear-btn">Clear</button>
    <button id="get-value-btn">Get Data URL</button>
  </p>
  <textarea id="output" style="width: 100%; height: 5em;" placeholder="Data URL will appear here..."></textarea>

  <script>
    const draw = document.getElementById('draw');
    const colorInput = document
```
