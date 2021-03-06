const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        // roles: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Role",
        //     },
        // ],
    },
    { timestamps: true }
);

module.exports = model("users", UserSchema);
