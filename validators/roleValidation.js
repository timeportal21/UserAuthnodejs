const Joi = require("@hapi/joi");

const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": "Invalid type, role name must be string",
        "string.empty": "role name is not allowed to be empty",
        "string.min": "name length must be at least 3 characters long",
        "any.required": "name is a required field",
    }),
});

const roleSchemaValidation = async (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const extractedErrors = [];
        error.details &&
            error.details.map((err) => {
                extractedErrors.push({ [err.context.key]: err.message });
            });
        return res.status(422).json({ error: extractedErrors });
    }
    next();
};

module.exports = { roleSchemaValidation };
