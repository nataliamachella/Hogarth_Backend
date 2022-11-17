const express = require("express");
const router = express.Router();
const categoriesControllers = require("../controllers/categoriesControllers.js");

// GET ALL CATEGORIES
router.get("/", categoriesControllers.index);

// GET Categorie BY ID
router.get("/:url", categoriesControllers.findByUrl);

//ADMIN ROUTES

// CREATE NEW Category
router.post("/create", categoriesControllers.createCategory);

// CHANGE Category
router.put("/change/:id", categoriesControllers.changeCategory);

// DELETE Category
router.delete("/delete/:id", categoriesControllers.deleteCategory);

module.exports = router;
