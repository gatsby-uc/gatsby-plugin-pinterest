# gatsby-plugin-pinterest
Load the Pinterest JavaScript to let users Save images to their boards on hover :pushpin:

## Install

*Will publish to the Gatsby Plugin Library and NPM soon*

### Manual Install

* Create a `plugins` directory at the root of your Gatsby project directory
* Copy the `gatsby-plugin-pinterest` directory into it
* Youre set! To activate, read *How to use*

## How to use

Declare the plugin in your `gatsby-config.js` file at the root of your project directory:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-pinterest`,
    options: {
      // Set to true to display a bigger button
      tall: true, // default
      // Set to true to hide the text and display only a round P button
      round: false // default
    }
  }
];
```

## Examples

*See the docs on [Pinterest Developers](https://developers.pinterest.com/docs/widgets/save/#examples)*
