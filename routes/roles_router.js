const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const {
    store,
    index,
    show,
    destroy,
    update,
} = require("../controllers/roleController");

const { roleSchemaValidation } = require("../validators/roleValidation");

// Create route
router.post("/", roleSchemaValidation, async (req, res) => {
    await store(req.body, res);
});

// Get route
router.get("/", async (req, res) => {
    await index(req, res);
});

// Get by id route
router.get("/:id", async (req, res) => {
    await show(req.params.id, res);
});

// Delete route
router.delete("/:id", async (req, res) => {
    await destroy(req.params.id, res);
});

// update route
router.patch("/:id", roleSchemaValidation, async (req, res) => {
    await update(req, res);
});

module.exports = router;
