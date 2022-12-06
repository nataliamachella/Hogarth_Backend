const express = require("express");
const router = express.Router();
const groupSubjectsControllers = require("../controllers/groupSubjectController");

// GET ALL SUBJECTS
router.get("/", groupSubjectsControllers.index);

router.get("/findInUse", groupSubjectsControllers.findInUse);

// GET SUBJECT BY ID
router.get("/findByID/:id", groupSubjectsControllers.findById);

//ADMIN ROUTES

// CREATE NEW SUBJECT
router.post("/create", groupSubjectsControllers.createSubject);

// CHANGE SUBJECT
router.put("/change/:id", groupSubjectsControllers.changeSubject);

// DELETE SUBJECT
router.delete("/delete/:id", groupSubjectsControllers.deleteSubject);

module.exports = router;
