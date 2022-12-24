const express = require("express");
const router = express.Router();
const notesControllers = require("../controllers/notesControllers.js");

// GET ALL NOTES
router.get("/", notesControllers.index);

// GET NOTE BY ID
router.get("/byURL/:url", notesControllers.findByUrl);

// SEARCH NOTE
router.get("/search", notesControllers.searchByQueryString);

// FIND BY CATEGORY
router.get("/byCategory/:url", notesControllers.findByCategory);

//ADMIN ROUTES

// CREATE NEW NOTE
router.post("/create", notesControllers.createNote);

// CHANGE NOTE
router.put("/change/:id", notesControllers.changeNote);

router.delete("/deleteContent/:id", notesControllers.deleteContent);

// DELETE NOTE
router.delete("/delete/:id", notesControllers.deleteNote);

module.exports = router;
