const db = require("../config/database");

module.exports = {
  getById: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        ` SELECT 
            nota.id,  
            alu.nome,
            nota.n1,
            nota.n2,
            nota.n3,
            nota.n4,
            round((nota.n1 + nota.n2 + nota.n3 + nota.n4)/4,2) as media
            FROM 
              notas nota
              join alunos alu on alu.id = nota.idAluno
            WHERE 
              alu.id = ?`,
        [id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            //vai verificar se retornou mais de 1 e pegar o 1
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },
};
