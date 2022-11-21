const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const users = require("./users.js");
const notes = require("./notes.js");
const subcategories = require("./subcategories.js");
const categories = require("./categories.js");
const subjects = require("./subjects.js");
const typeContent = require("./typeContent");
const options = require("./swagger.json");

const swaggerSpec = swaggerJSDoc(options);

//router.use("/users", users);
router.use("/notes", notes);
router.use("/subcategories", subcategories);
router.use("/categories", categories);
router.use("/subjects", subjects);
router.use("/typeContent", typeContent);
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerSpec));

module.exports = router;
