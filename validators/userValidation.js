const Joi = require("@hapi/joi");

const options = {
    errors: {
        wrap: {
            label: "",
        },
    },
    abortEarly: false,
};

const schema = Joi.object({
    fullName: Joi.string().required().messages({
        "string.base": "Invalid Type, Name must be string",
        "string.empty": "Name is not allowed to be empty",
        "any.required": "Name field is required",
    }),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    confirm_password: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages({
            "string.base": "Invalid type",
            "string.empty": "confirm password is not allowed to be empty",
            "string.required": "you must confirm password first",
            "any.only": "password doesnot match",
        }),
});

const userSchemaValidation = async (req, res, next) => {
    const { error } = schema.validate(req.body, options);
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

module.exports = { userSchemaValidation };
