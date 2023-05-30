# HTML Forms

An HTML form is a web page element that allows users to enter data and submit it to a server. Forms are commonly used for things like user registration, login, and contact forms.

To create an HTML form, you use the `<form>` tag. The `<form>` tag has a number of attributes, including the action attribute, which specifies the URL that the form data will be submitted to, and the method attribute, which specifies the HTTP method that will be used to submit the form data.

The most common form elements are:

* **Text input:** A text input allows users to enter a single line of text.
* **Textarea:** A textarea allows users to enter multiple lines of text.
* **Select:** A select element allows users to choose from a list of options.
* **Radio button:** A radio button allows users to select one option from a group of options.
* **Checkbox:** A checkbox allows users to select multiple options from a group of options.
* **Submit button:** A submit button submits the form data to the server.
* **Reset button:** A reset button resets the form data to its initial state.

Here is an example of an HTML form:

```html
<form action="contact.php" method="post">
  <input type="text" name="name" placeholder="Your name">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

When a user submits a form, the form data is sent to the server. The server can then process the form data and take any necessary action. For example, the server could send an email to the user, or it could add the user's information to a database.

Forms are a powerful tool that can be used to collect data from users. By understanding how to create and use HTML forms, you can create web pages that are more interactive and engaging.

## Example

```css
<form action="/contact" method="post">
  <select name="color" id="color">
    <optgroup label="Red">
        <option value="red">Red</option>
        <option value="darkred">Dark Red</option>
    </optgroup>
    <optgroup label="Blue">
        <option value="blue">Blue</option>
        <option value="lightblue">Light Blue</option>
    </optgroup>
  </select>

  <input type="text" name="name" placeholder="Your name">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="checkbox" name="newsletter" value="yes"> I would like to subscribe to the newsletter
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

## React Example

```javascript
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
```