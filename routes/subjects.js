const express = require("express");
const router = express.Router();
const subjectsControllers = require("../controllers/subjectsControllers.js");

// GET ALL SUBJECTS
router.get("/", subjectsControllers.index);

// GET SUBJECT BY ID
router.get("/:id", subjectsControllers.findById);

//ADMIN ROUTES

// CREATE NEW SUBJECT
router.post("/create", subjectsControllers.createSubject);

// CHANGE SUBJECT
router.put("/change/:id", subjectsControllers.changeSubject);

// DELETE SUBJECT
router.delete("/delete/:id", subjectsControllers.deleteSubject);

module.exports = router;
