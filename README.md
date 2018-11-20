# gatsby-plugin-pinterest
Load the Pinterest JavaScript to let users Save images to their boards on hover :pushpin:

[![npm](https://img.shields.io/npm/dt/gatsby-plugin-pinterest.svg)](https://www.npmjs.com/package/gatsby-plugin-pinterest)
![npm](https://img.shields.io/npm/v/gatsby-plugin-pinterest.svg)
![NpmLicense](https://img.shields.io/npm/l/gatsby-plugin-pinterest.svg)
[![GitHub issues](https://img.shields.io/github/issues-raw/robinmetral/gatsby-plugin-pinterest.svg)](https://github.com/robinmetral/gatsby-plugin-pinterest/issues)

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

## Contribute

Fork this repo and make a PR!
