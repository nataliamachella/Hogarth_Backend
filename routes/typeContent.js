const express = require("express");
const router = express.Router();
const typeContentControllers = require("../controllers/typeContentController");

router.get("/", typeContentControllers.index);
router.get("/:name", typeContentControllers.findByName);
router.post("/create", typeContentControllers.createTypeContent);
router.put("/change/:id", typeContentControllers.changeTypeContent);
router.delete("/delete/:id", typeContentControllers.deleteTypeContent);

module.exports = router;
