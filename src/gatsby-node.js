const deprecationWarning = `[gatsby-plugin-pinterest] From now on, you can use the 'saveButton' option to show Pinterest's save button on images.
See https://github.com/robinmetral/gatsby-plugin-pinterest#usage`;

exports.onPreInit = ({ reporter }, { round, tall } = {}) => {
  if (round || tall) {
    reporter.warn(deprecationWarning);
  }
};
