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
