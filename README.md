<div align="center">
<h1>gatsby-plugin-pinterest</h1>

<p>Gatsby plugin to add Pinterest's embed script. 📍</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install gatsby-plugin-pinterest
```

or

```sh
yarn add gatsby-plugin-pinterest
```

This library has a `peerDependencies` listing for [`gatsby`][gatsby].

## Usage

```js
// In your gatsby-config.js

module.exports = {
  // Find the 'plugins' array
  plugins: [
    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        // Set to true to hide the text and display only a round P button
        round: false, // default
        // Set to true to display a bigger button
        tall: true, // default
      },
    },

    // Other plugins here...
  ],
}
```

## Inspiration

Just like [`gatsby-plugin-twitter`][gatsby-plugin-twitter] and
[`gatsby-plugin-instagram-embed`][gatsby-plugin-instagram-embed] are doing for
the [Twitter][twitter] and [Instagram][instagram] embed script, this plugin adds
the [Pinterest][pinterest] embed script to your [`gatsby`][gatsby] site.

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/robinmetral/gatsby-plugin-pinterest.svg?style=flat-square
[build]: https://travis-ci.org/robinmetral/gatsby-plugin-pinterest
[coverage-badge]: https://img.shields.io/codecov/c/github/robinmetral/gatsby-plugin-pinterest.svg?style=flat-square
[coverage]: https://codecov.io/github/robinmetral/gatsby-plugin-pinterest
[version-badge]: https://img.shields.io/npm/v/gatsby-plugin-pinterest.svg?style=flat-square
[package]: https://www.npmjs.com/package/gatsby-plugin-pinterest
[downloads-badge]: https://img.shields.io/npm/dm/gatsby-plugin-pinterest.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/gatsby-plugin-pinterest
[license-badge]: https://img.shields.io/npm/l/gatsby-plugin-pinterest.svg?style=flat-square
[license]: https://github.com/robinmetral/gatsby-plugin-pinterest/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/robinmetral/gatsby-plugin-pinterest/blob/master/other/CODE_OF_CONDUCT.md
[emojis]: https://allcontributors.org/docs/en/emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/robinmetral/gatsby-plugin-pinterest/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+Bug%22+sort%3Acreated-desc
[requests]: https://github.com/robinmetral/gatsby-plugin-pinterest/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/robinmetral/gatsby-plugin-pinterest/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[gatsby]: https://github.com/gatsbyjs/gatsby
[gatsby-plugin-instagram-embed]: https://github.com/jlengstorf/gatsby-plugin-instagram-embed
[gatsby-plugin-twitter]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter
[instagram]: https://instagram.com
[pinterest]: https://pinterest.com
[twitter]: https://twitter.com
<!-- prettier-ignore-end -->
