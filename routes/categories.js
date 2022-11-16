const express = require("express");
const router = express.Router();
const categoriesControllers = require("../controllers/categoriesControllers.js");

// GET ALL CATEGORIES
router.get("/", categoriesControllers.index);

// GET CATEGORY BY ID
router.get("/:id", categoriesControllers.findById);

//ADMIN ROUTES

// CREATE NEW CATEGORY
router.post("/create", categoriesControllers.createCategory);

// CHANGE CATEGORY
router.put("/change/:id", categoriesControllers.changeCategory);

// DELETE CATEGORY
router.delete("/delete/:id", categoriesControllers.deleteCategory);

module.exports = router;
