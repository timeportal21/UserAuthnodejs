const router = require("express").Router();

const { index, store } = require("../controllers/userController");
const { userSchemaValidation } = require("../validators/userValidation");

// View user
router.get("/", async (req, res) => {
    await index(req, res);
});

// Create user
router.post("/", userSchemaValidation, async (req, res) => {
    await store(req.body, res);
});

// View user with id
router.get("/view-user/:id", (req, res) => {
    res.json("id user view");
});

// Update user
router.put("/update-user", (req, res) => {
    res.json("update user");
});

// Delete user
router.delete("/delete-user", (req, res) => {
    res.json("delete user");
});

module.exports = router;
