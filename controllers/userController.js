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
    try {
        let userName = req.fullName.toLowerCase();
        const emailExist = await User.findOne({ email: req.email });
        if (emailExist)
            return res.status(400).json({ message: "Email already exist" });
        const hashPassword = await bcrypt.hash(req.password, 12);

        const user = new User({
            fullName: userName,
            email: req.email,
            password: hashPassword,
        });

        await user.save();
        return res.status(200).json({ message: "Successfully saved" });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
};

const show = async (id, res) => {
    try {
        let user = await User.findById(id);
        if (!user) return res.json({ message: "data cannot be found" });
        return res.status(200).json(user);
    } catch (error) {
        return res.json({ message: "data cannot be found" });
    }
};

module.exports = { index, store, show };
