const Sequelize = require("sequelize");
const connection = require("../config/database");

const Aluno = connection.define("alunos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
 
module.exports = Aluno;
