const express = require("express");
const app = express();
const router = require("./routes");
const db = require("./config/db");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

//seed
const seed = require("./seed");

// parsing middleware
app.use(express.json());
app.use("/api", router);
app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
// app.use(cookieParser());

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({ force: true })
  .then(() => {
    return seed();
  })
  .then(() =>
    app.listen(5432, () => console.log("Servidor escuchando en el puerto"))
  )
  .catch(console.error);
