# gatsby-plugin-pinterest
Load the Pinterest JavaScript to let users Save images to their boards on hover :pushpin:

## Install

In your Gatsby project directory, run:

`npm install --save gatsby-plugin-pinterest`

## Activate

Declare the plugin in your `gatsby-config.js`:

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

*See the [Pinterest Developers](https://developers.pinterest.com/docs/widgets/save/#examples) docs for more infos and examples*
