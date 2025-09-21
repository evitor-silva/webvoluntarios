const { Model, DataTypes } = require('sequelize');

class Rewards extends Model {
  static initModel(sequelize) {
    Rewards.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        acao: { type: DataTypes.STRING(45), allowNull: false },
        pontos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      },
      { sequelize, modelName: 'Recompensa', tableName: 'recompensas', timestamps: false }
    );
    return Rewards;
  }
}

module.exports = Rewards;
