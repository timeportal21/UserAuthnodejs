const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        // users: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "User",
        //     },
        // ],
    },
    { timestamps: true }
);

module.exports = model("roles", roleSchema);
