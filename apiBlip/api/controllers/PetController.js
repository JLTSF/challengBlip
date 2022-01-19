const express = require("express");
const app = express();

app.get("/service", function (req, res) {
  res.status(200).send({
    banho: "R$50",
    tosa: "R$30",
    D: "R$10",
  });
});

app.get("/banho", function (req, res) {
  res.status(200).send({
    valor: "R$50",
  });
});
app.get("/tosa", function (req, res) {
  res.status(200).send({
    valor: "R$30",
  });
});
app.get("/desconto", function (req, res) {
  res.status(200).send({
    D: "R$10",
  });
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log("run");
});
