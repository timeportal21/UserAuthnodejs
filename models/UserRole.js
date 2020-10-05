const { Schema, model } = require("mongoose");

const userRoleSchema = new Schema(
    {
        role_idfk: {
            type: Schema.Types.ObjectId,
            ref: "role",
        },
        user_idfk: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { timestamps: true }
);

module.exports = model("userRoles", userRoleSchema);
