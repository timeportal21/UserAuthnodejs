const router = require("express").Router();
const {
    index,
    store,
    show,
    update,
    destroy,
} = require("../controllers/userController");

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
router.patch("/:id", userSchemaValidation, async (req, res) => {
    await update(req, res);
});

// Delete user
router.delete("/:id", async (req, res) => {
    await destroy(req.params.id, res);
});

module.exports = router;
