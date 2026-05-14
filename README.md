# input-draw

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency, lightweight custom HTML element (`<input-draw>`) that provides a simple drawing canvas for mouse and touch input.

## Demo

- **Live Demo:** [https://code4fukui.github.io/input-draw/](https://code4fukui.github.io/input-draw/)

The demo showcases the drawing area with controls for pen color and width, along with buttons to clear the canvas and get/set the drawing data as a Base64 data URL.

## Features

- **Web Component:** A simple, encapsulated, and reusable custom element.
- **Mouse & Touch Support:** Works seamlessly on both desktop and mobile devices.
- **Customizable Pen:** Easily change the pen's `color` and `pen-width` via HTML attributes.
- **Data URL Export/Import:** Get the drawing as a `image/png` data URL via the `.value` property, or set it to load an existing image.
- **Responsive:** Automatically resizes to fit its parent container.
- **Simple API:** Includes a `.clear()` method to reset the canvas.

## Quick Start

1.  **Add the script to your page.** You can use the CDN link directly.

    ```html
    <script type="module" src="https://code4fukui.github.io/input-draw/input-draw.js"></script>
    ```

2.  **Use the element in your HTML.**

    ```html
    <input-draw id="drawing-pad" color="blue" pen-width="10" style="border: 1px solid #ccc; width: 100%; height: 400px;"></input-draw>
    ```

## API Reference

### Attributes

-   `color="<color>"`
    -   Sets the pen color. Accepts any valid CSS color string (e.g., `red`, `#ff0000`, `rgb(255, 0, 0)`).
    -   Default: `black`

-   `pen-width="<number>"`
    -   Sets the pen stroke width in pixels.
    -   Default: `1`

### Properties

-   `.value`
    -   **Get:** Returns the current canvas content as a `image/png` data URL string.
    -   **Set:** Loads an image onto the canvas from a valid data URL.

### Methods

-   `.clear()`
    -   Clears the entire canvas to a white background.

## Example: Full Interaction

This example demonstrates how to use JavaScript to interact with the `<input-draw>` element's attributes, properties, and methods.

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