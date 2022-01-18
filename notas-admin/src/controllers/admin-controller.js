const Aluno = require("../models/aluno-model");
const Nota = require("../models/nota-model");
const path = require("path");

module.exports = {
  getAll: async (req, res) => {
    let notas = await Nota.findAll({
      include: [{
        model: Aluno,
        required: true,
        attributes: ["nome"]
      }]
    });
    res.status(200).send(notas);
  },

  insertNotas: async (req, res) => {
    const novoUsuario = await Aluno.create({
      nome: req.body.nome
    })

    const nota = await Nota.create({
      n1: req.body.n1,
      n1: req.body.n2,
      n1: req.body.n3,
      n1: req.body.n4,
      idAluno: novoUsuario.id
    });

    res.status(200).send(nota);
  },
};
