const User = require("../models/User");
const bcrypt = require("bcryptjs");

const index = async (req, res) => {
    try {
        const getUser = await User.find();
        return res.status(200).json(getUser);
    } catch (error) {
        return res.status(404).json({ message: "There is no user" });
    }
};

const store = async (req, res) => {
    return res.json(req);
};

module.exports = { index, store };
