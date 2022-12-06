const express = require("express");
const router = express.Router();
const typeContentControllers = require("../controllers/typeContentController");

router.get("/", typeContentControllers.indexBC);
router.get("/findByName/:name", typeContentControllers.findByNameBC);
router.get("/findByCategory/:url", typeContentControllers.findByCategoryBC);
router.post("/create", typeContentControllers.createTypeContentBC);
router.put("/change/:id", typeContentControllers.changeTypeContentBC);
router.delete("/delete/:id", typeContentControllers.deleteTypeContentBC);

module.exports = router;
