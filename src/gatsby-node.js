if (process.env.GATSBY_EXPERIMENTAL_PLUGIN_OPTION_VALIDATION) {
  const getDeprecatedOptions = ({ Joi }) =>
    ["round", "tall"].reduce(
      (allOptions, option) => ({
        ...allOptions,
        [option]: Joi.boolean()
          .forbidden()
          .messages({
            "any.unknown": `'${option}' is no longer supported. Use 'saveButton.${option}' instead by setting it to the same value you had before on '${option}'.`,
          }),
      }),
      {},
    );

  exports.pluginOptionsSchema = ({ Joi }) =>
    Joi.object({
      ...getDeprecatedOptions({ Joi }),
      saveButton: Joi.alternatives()
        .try(
          Joi.boolean(),
          Joi.object({
            round: Joi.boolean().default(false),
            tall: Joi.boolean().default(true),
          }),
        )
        .default(false),
    });
} else {
  const deprecationWarning = `[gatsby-plugin-pinterest] From now on, you should use the 'saveButton' option to show Pinterest's save button on images.
See https://github.com/robinmetral/gatsby-plugin-pinterest#usage`;

  exports.onPreInit = ({ reporter }, { round, tall } = {}) => {
    if (round || tall) {
      reporter.warn(deprecationWarning);
    }
  };
}
