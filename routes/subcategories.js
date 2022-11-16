const express = require("express");
const router = express.Router();
const subcategoriesControllers = require("../controllers/subcategoriesControllers.js");

// GET ALL SUBCATEGORIES
router.get("/", subcategoriesControllers.index);

// GET SUBCATEGORY BY ID
router.get("/:url", subcategoriesControllers.findByUrl);

//ADMIN ROUTES

// CREATE NEW SUBCATEGORY
router.post("/create", subcategoriesControllers.createSubcategory);

// CHANGE SUBCATEGORY
router.put("/change/:id", subcategoriesControllers.changeSubcategory);

// DELETE SUBCATEGORY
router.delete("/delete/:id", subcategoriesControllers.deleteSubcategory);

module.exports = router;
