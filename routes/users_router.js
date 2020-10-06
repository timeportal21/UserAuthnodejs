const router = require("express").Router();
const { index, store, show } = require("../controllers/userController");
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
router.get("/:id", async (req, res) => {
    await show(req.params.id, res);
});

// Update user
router.put("/:id", (req, res) => {
    res.json("update user");
});

// Delete user
router.delete("/:id", (req, res) => {
    res.json("delete user");
});

module.exports = router;
