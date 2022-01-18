const Sequelize = require("sequelize");
const connection = require("../config/database");
const Aluno = require("./aluno-model");

const Nota = connection.define("notas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  n1: {
    type: Sequelize.INTEGER,
  },
  n2: {
    type: Sequelize.INTEGER,
  },
  n3: {
    type: Sequelize.INTEGER,
  },
  n4: {
    type: Sequelize.INTEGER,
  },
  idAluno: {
    type: Sequelize.INTEGER,
    references: { model: "alunos", key: "id" },
    onDelete: "CASCADE",
    allowNull: false,
  },
});

module.exports = Nota;
