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
        // const yoyo = JSON.parse(error);

        const errorObj = {};

        for (const key of error.details) {
            errorObj[key.context.label] = key.message;
        }

        // error.details &&
        //     error.details.map((err, i) => {
        //         // lwal[i] = { name: err.context.key, vlue: err.message };
        //         lwal;
        //         // extractedErrors.push({ [err.context.key]: err.message });
        //     });

        // const extractedErrors = [];
        // error.details &&
        //     error.details.map((err) => {
        //         extractedErrors.push({ [err.context.key]: err.message });
        //     });

        // const objConstant = Object.assign({}, extractedErrors);
        // const objConstant = Object.keys(extractedErrors);

        return res.status(422).json({ error: errorObj });
    }
    next();
};

module.exports = { userSchemaValidation };
