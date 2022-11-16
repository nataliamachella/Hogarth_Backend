const express = require("express");
const router = express.Router();
const notesControllers = require("../controllers/notesControllers.js");

// GET ALL NOTES
router.get("/", notesControllers.index);

// GET NOTE BY ID
router.get("/:id", notesControllers.findById);

// SEARCH NOTE
router.get("/search/:queryString", notesControllers.searchByQueryString);

//ADMIN ROUTES

// CREATE NEW NOTE
router.post("/create", notesControllers.createNote);

// CHANGE NOTE
router.put("/change/:id", notesControllers.changeNote);

// DELETE NOTE
router.delete("/delete/:id", notesControllers.deleteNote);

module.exports = router;
