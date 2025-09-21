const { Model, DataTypes } = require('sequelize');

class Ponts extends Model {
  static initModel(sequelize) {
    Ponts.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_recompensa: { type: DataTypes.INTEGER, allowNull: false },
        id_usuario: { type: DataTypes.INTEGER, allowNull: false },
        id_servico: { type: DataTypes.INTEGER, allowNull: false },
        data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      },
      { sequelize, modelName: 'Pontuacao', tableName: 'pontuacoes', timestamps: false }
    );
    return Ponts;
  }
}

module.exports = Ponts;
