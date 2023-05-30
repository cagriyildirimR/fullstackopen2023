# Hypertext Markup Language (HTML)

HTML is a markup language used for structuring web pages. It consists of elements that can be modified using attributes to control their behavior and appearance. The syntax of HTML is straightforward, with opening and closing tags. Anything between the tags is considered the content. However, if there is no content, we can use void elements that combine the opening and closing tags into one. The idea is to create a tree-like structure with these tags, which is then rendered by the browser for users to see.

## Anatomy of an HTML Document

The following are some important and commonly used tags in HTML:

```html
<!DOCTYPE html>
```
The `<!DOCTYPE html>` declaration is an old concept that is not crucial anymore. Omitting it won't cause significant issues, but it's still recommended to include it at the top of our HTML code.

```html
<html></html>
```
The `<html>` element serves as the top node of our HTML tree. All other elements are nested inside the `<html>` tag.

```html
<head></head>
```
The `<head>` element contains meta-information and logic for the page. It is not directly displayed to users. Inside the `<head>`, we can add the page title using the `<title></title>` tags, include scripts or stylesheets, and define the character encoding with the `<meta charset="utf-8">` tag.

```html
<body></body>
```
The `<body>` element contains all the visible content of the web page. It encompasses various nested elements based on the content type. For example, we can use `<h1></h1>` tags to add a heading to an article and `<p></p>` tags for paragraphs. We can further refine these elements by adding attributes and modifying the CSS styles through an external CSS file.

These are just a few examples of the tags used in HTML. There are many more tags available, each serving a specific purpose and helping in structuring and formatting web pages.


```html
<a></a>
```
The `<a>` tag is used to create links. For example, to create a link to another webpage, you can use the following code:
```html
<a href="https://www.example.com">Visit Example</a>
```
This will create a link that says "Visit Example" and when clicked, it will take the user to the "https://www.example.com" webpage.

```html
<img>
```
The `<img>` tag is used to embed images in a web page. For example, to display an image named "example.jpg" located in the same directory as the HTML file, you can use the following code:
```html
<img src="example.jpg" alt="Example Image">
```
This code will display the image and if it is not found or cannot be displayed, the alternative text "Example Image" will be shown.

```html
<ul></ul> and <li></li>
```
The `<ul>` (unordered list) and `<li>` (list item) tags are used to create bulleted lists. For example:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ul>
    <li>Nested 1</li>
    <li>Nested 2</li>
  </ul>
  <li>Item 3</li>
</ul>
```
This code will create an unordered list with three items, displayed as bullet points:
- Item 1
- Item 2
    - Nested 1
    - Nested 2
- Item 3

```html
<ol></ol>
```
The `<ul>` (unordered list) and `<li>` (list item) tags are used to create bulleted lists. For example:
```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```
This code will create an ordered list with three items, displayed as bullet points:
1. Item 1
2. Item 2
3. Item 3


```html
<table></table>
```
The `<table>` tag is used to define a table in HTML. It acts as a container for all the table-related content, such as rows, columns, headers, and data cells. Everything that is part of the table structure is placed between the opening and closing `<table>` tags.

```html
<tr></tr>
```
The `<tr>` tag is used to define a table row within the `<table>` structure. It represents a horizontal row of cells in the table. All the table cells, either header cells or data cells, should be placed within the `<tr>` tags.

```html
<th></th>
```
The `<th>` tag is used to define table header cells. It represents a header cell within a table row (`<tr>`) and is typically used to label or describe the content of the corresponding data cells. By default, header cells are displayed in bold and centered. They are commonly used to create column headers for tables.

```html
<td></td>
```
The `<td>` tag is used to define table data cells. It represents a cell within a table row (`<tr>`) that contains actual data or content. Data cells are commonly used to populate the main body of the table and provide the actual values or information.

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

This code creates a simple table with two columns and two rows. The first row contains the header cells (`<th>`) labeled as "Header 1" and "Header 2". The second row contains the data cells (`<td>`) with the values "Data 1" and "Data 2". When rendered in a browser, the table would appear as follows:

| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |

The `<table>`, `<tr>`, `<th>`, and `<td>` tags are fundamental for structuring and organizing tabular data in HTML.
This code will create a simple table with two columns and one row of data:
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |

```html
<form></form>, <input>, and <button></button>
```
The `<form>` tag is used to create a form on a web page. For example, a simple form with a text input and a submit button can be created as follows:
```html
<form>
  <input type="text" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
```
This code will display a text input field where users can enter their name and a submit button to submit the form.
