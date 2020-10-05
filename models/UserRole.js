const { Schema, model } = require("mongoose");

const userRoleSchema = new Schema(
    {
        role_idfk: {
            type: Schema.Types.ObjectId,
            ref: "Role",
        },
        user_idfk: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = model("user-roles", userRoleSchema);
