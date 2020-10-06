const Role = require("../models/Role");

const index = async (req, res) => {
    try {
        const getData = await Role.find();
        return res.status(200).json(getData);
    } catch (error) {
        return res.status(404).json({ message: "There is no data!" });
    }
};

const store = async (req, res) => {
    try {
        let roleName = req.name.toLowerCase();
        const roleExist = await Role.findOne({ name: roleName });
        if (roleExist)
            return res.status(400).json({ message: `role already exist` });

        const role = new Role({
            name: roleName,
        });

        const saveRole = await role.save();
        return res.status(200).json({ message: `Successfully saved` });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
};

const show = async (id, res) => {
    try {
        const getById = await Role.findById(id);
        if (!getById) {
            return res.status(404).json({ message: "There is no data!" });
        }
        return res.status(200).json(getById);
    } catch (error) {
        return res.status(404).json({ message: "There is no data!" });
    }
};

const destroy = async (id, res) => {
    try {
        const removeRole = await Role.findByIdAndDelete(id);
        if (removeRole)
            return res
                .status(200)
                .json({ message: `Successfully deleted role` });
        return res.status(422).json({ message: `Invalid request` });
    } catch (error) {
        return res.status(400).json({ message: "Role cannot be deleted" });
    }
};

const update = async (req, res) => {
    const id = req.params.id;
    try {
        const updateRole = await Role.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false,
        });
        if (!updateRole) return res.json({ message: "failed to update role" });
        return res.status(200).json({ message: `role successfully updated` });
    } catch (error) {
        return res.status(400).json({ message: "failed to update" });
    }
};

module.exports = { store, index, show, destroy, update };
