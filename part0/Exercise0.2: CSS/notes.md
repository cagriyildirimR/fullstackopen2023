# CSS 

CSS stands for Cascading style sheets. It is used to style HTML elements.

```css
p {
    color: red;
}
```

## Anatomy of CSS ruleset 

```css
selector {
    property: property value;
    |------Declaration------|
}

```

* **Selectors** are used to identify the HTML elements that you want to style.
* **Properties** are the names of the CSS properties that you want to set.
* **Values** are the values that you want to set for the CSS properties.

CSS code is written in a block-level format. Each block of CSS code starts with a selector and ends with a semicolon. The selector is followed by a declaration block, which contains one or more declarations. Each declaration consists of a property name and a value, separated by a colon.

For example, the following CSS code sets the color of all `div` elements to red:

```css
div {
  color: red;
}
```

In this example, the `div` selector is used to identify all `div` elements. The `color` property is used to set the color of the `div` elements. The value of the `color` property is `red`.

CSS code can be written in an external style sheet or in an inline style. External style sheets are stored in separate files, and they are linked to the HTML document. Inline styles are written directly in the HTML document.

External style sheets are a good choice for large websites, because they make it easier to maintain the CSS code. Inline styles are a good choice for small websites, or for websites where you need to make changes to the CSS code frequently.

CSS is a powerful tool that can be used to style web pages. By learning the basics of CSS syntax, you can start to create your own custom styles for your web pages.

## CSS Syntax
* **Curly brackets** are used to group declarations together. For example, the following CSS code sets the color and font size of all `h1` elements:

```css
h1 {
  color: red;
  font-size: 24px;
}
```

* **Semicolons** are used to separate declarations. For example, the following CSS code sets the color and font size of all `h1` elements, and then sets the background color of all `p` elements:

```css
h1 {
  color: red;
  font-size: 24px;
}

p {
  background-color: blue;
}
```

* **Whitespace** is ignored in CSS code. For example, the following two CSS codes are equivalent:

```css
h1 {
  color: red;
  font-size: 24px;
}

h1 {
    color: red;
    font-size: 24px;
}
```

* **Comments** can be used to add notes to your CSS code. Comments are not processed by the browser, so they do not affect the appearance of your web page. To create a comment, start the comment with a `/*` and end it with a `*/`. For example, the following CSS code has a comment that explains what the code does:

```css
/* This code sets the color of all h1 elements to red */
h1 {
  color: red;
}
```

* **Combining selectors**

You can combine multiple selectors using the `,` (comma) operator. For example, the following CSS code selects all `div` elements and all `p` elements:

```css
div, p {
  color: red;
}
```

* **Using the descendant selector**

The descendant selector is represented by the `>` symbol. The descendant selector can be used to select all elements that are descendants of a particular element. For example, the following CSS code selects all `p` elements that are descendants of a `div` element:

```css
div  p {
  color: red;
}
```

* **Using the child selector**

The child selector is represented by the `>>` symbol. The child selector can be used to select all elements that are direct children of a particular element. For example, the following CSS code selects all `p` elements that are direct children of a `div` element:

```css
div > p {
  color: red;
}
```

* **Using the universal selector**

The universal selector is represented by the `*` symbol. The universal selector can be used to select all elements in the document. For example, the following CSS code sets the color of all elements in the document to red:

```css
* {
  color: red;
}
```

* **Using the attribute selector**

The attribute selector is represented by the `[]` symbol. The attribute selector can be used to select elements that have a particular attribute. For example, the following CSS code selects all elements that have an `id` attribute with the value of `my-id`:

```css
[id="my-id"] {
  color: red;
}
```

* **Using the class selector**

The class selector is represented by the `.` symbol. The class selector can be used to select elements that have a particular class. For example, the following CSS code selects all elements that have a class of `my-class`:

```css
.my-class {
  color: red;
}
```

* **Using the ID selector**

The ID selector is represented by the `#` symbol. The ID selector can be used to select a single element that has a particular ID. For example, the following CSS code selects the element with an ID of `my-id`:

```css
#my-id {
  color: red;
}
```

These are just a few of the ways to select multiple elements in CSS. There are many other ways, and you can combine different selectors to create complex selectors.

Here are some additional syntax rules:

* **Parentheses** can be used to group selectors together. This can be useful when you want to apply the same style to multiple elements that are related in some way. For example, the following CSS code sets the color of all `h1` elements and all `h2` elements to red:

```css
(h1, h2) {
  color: red;
}
```

* **At-rules** can be used to define custom styles or to import external style sheets. For example, the following CSS code defines a custom style called `my-style`:

```css
@my-style {
  color: red;
}
```

## Block vs inline element

Block elements and inline elements are two types of HTML elements that have different display properties. Block elements always start on a new line and take up the full width of the browser window, while inline elements do not start on a new line and only take up as much width as necessary. This distinction is important because it allows web developers to control the layout of their web pages and create a more visually appealing and user-friendly experience.

## Example

```css
body {
  /* Sets the font family to Arial, sans-serif */
  font-family: Arial, sans-serif;

  /* Sets the font size to 16 pixels */
  font-size: 16px;

  /* Sets the color to black */
  color: #000000;
}

h1 {
  /* Sets the font size to 24 pixels */
  font-size: 24px;

  /* Sets the font weight to bold */
  font-weight: bold;

  /* Sets the color to white */
  color: #ffffff;

  /* Sets the background color to black */
  background-color: #000000;
}

p {
  /* Sets the margin to 10 pixels on the top and bottom */
  margin: 10px 0;
}

a {
  /* Removes the text decoration */
  text-decoration: none;

  /* Sets the color to black */
  color: #000000;
}
```