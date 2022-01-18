require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const alunoRoutes = require("./routes/aluno-routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", alunoRoutes);

app.use((req, res, next) => {
  const erro = new Error("Not found");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    status: error.status,
    mensagem: error.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server on running http://localhost:${process.env.PORT}/api`);
});
