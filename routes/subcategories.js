const express = require("express");
const router = express.Router();
const subcategoriesControllers = require("../controllers/subcategoriesControllers.js");

// GET ALL SUBCATEGORIES
router.get("/", subcategoriesControllers.index);

// GET subCategory BY ID
router.get("/findByUrl/:url", subcategoriesControllers.findByUrl);

router.get("/findByCategory/:name", subcategoriesControllers.findByCategory);

//ADMIN ROUTES

// CREATE NEW subCategory
router.post("/create", subcategoriesControllers.createSubCategory);

// CHANGE subCategory
router.put("/change/:id", subcategoriesControllers.changeSubCategory);

// DELETE subCategory
router.delete("/delete/:id", subcategoriesControllers.deleteSubcategory);

module.exports = router;
