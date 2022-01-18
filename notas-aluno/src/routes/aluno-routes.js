const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/aluno-controller');

router.get("/notas-aluno/:id", AlunoController.getById);

module.exports = router;