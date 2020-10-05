const router = require("express").Router();

// Create user
router.post("/register-user", (req, res) => {
    res.json("user register");
});

// View user
router.get("/view-user", (req, res) => {
    res.json("view user");
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
