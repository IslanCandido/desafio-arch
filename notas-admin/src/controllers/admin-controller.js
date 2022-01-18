const Aluno = require("../models/aluno-model");
const Nota = require("../models/nota-model");

module.exports = {
  getAll: async (req, res) => {
    let json = { code: null, status: "", data: [] };

    let notas = await Nota.findAll({ include: Aluno });

    json.code = notas ? 200 : 404;
    json.status = notas ? "success" : "error";
    json.data = notas ? notas : "Nenhuma nota encontrada."; //se tiver nota ele joga no json

    res.status(200).send(json);
  },

  insertNotas: async (req, res) => {
    let json = { code: null, status: "", data: {} };

    let aluno = await Aluno.findOne({ where: { nome: req.body.nome } });
    if (aluno == undefined) {
      aluno = await Aluno.create({
        nome: req.body.nome,
      });
    }

    let nota = await Nota.findOne({ where: { idAluno: aluno.id } });
    if (nota == undefined) {
      nota = await Nota.create({
        n1: req.body.n1,
        n2: req.body.n2,
        n3: req.body.n3,
        n4: req.body.n4,
        idAluno: aluno.id,
      });
    } else {
      nota.n1 = req.body.n1;
      nota.n2 = req.body.n2;
      nota.n3 = req.body.n3;
      nota.n4 = req.body.n4;

      nota = await Nota.update({ nota });
    }

    json.code = 200;
    json.status = "success";
    json.data = nota; //se tiver nota ele joga no json

    res.status(200).send(json);
  },
};
