const AlunoService = require("../services/aluno-service");

module.exports = {
  getById: async (req, res) => {
    let json = { code: null, status: "", data: {} };

    let id = req.params.id; //para pegar o parametro
    let nota = await AlunoService.getById(id);

    json.code = nota ? 200 : 404;
    json.status = nota ? "success" : "error";
    json.data = nota ? nota : "Notas do aluno não encontradas."; //se tiver nota ele joga no json

    res.status(json.code).json(json);
  },
};
