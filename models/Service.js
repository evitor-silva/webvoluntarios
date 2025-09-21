const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static initModel(sequelize) {
    Servico.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        categorias_id: { type: DataTypes.INTEGER, allowNull: false },
        proprietario_usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        titulo: { type: DataTypes.STRING(145), allowNull: true, defaultValue: null },
        descricao: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
        status: { type: DataTypes.ENUM('Disponivel', 'Encerrado'), allowNull: true, defaultValue: 'Disponivel' },
      },
      { sequelize, modelName: 'Servico', tableName: 'servicos', timestamps: false }
    );
    return Servico;
  }
}

module.exports = Service;
