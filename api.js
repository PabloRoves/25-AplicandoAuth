const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Animal = require("./animal.controller");
const port = 3000;

mongoose.connect("mongodb+srv://pabloroves:nIdf6Sp5WKHeQW3j@cluster0.85k6kix.mongodb.net/DB_Sec25?retryWrites=true&w=majority");
//mongoose.connect('mongodb://localhost:27017/miapp')

app.use(express.json());

app.get("/animals", Animal.list);
app.post("/animals", Animal.create);
app.put("/animals/:id", Animal.update);
app.patch("/animals/:id", Animal.update);
app.delete("/animals/:id", Animal.destroy);

app.use(express.static("app"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.get("*", (req, res) => {
  res.status(404).send("Esta página no existe :(");
});

app.listen(port, () => {
  console.log("Arrancando la aplicación!");
});
