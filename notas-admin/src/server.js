require("dotenv").config();
const express = require('express')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const adminRoutes = require("./routes/admin-routes.js");
app.use('/api', adminRoutes)

//port
const PORT = process.env.PORT || 8080

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

app.listen(PORT, () => {
  console.log(`server on running http://localhost:${PORT}/api`);
});