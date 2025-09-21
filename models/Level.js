const { Model, DataTypes } = require('sequelize');

class Level extends Model {
  static initModel(sequelize) {
    Level.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(45), allowNull: false },
        pontos_min: { type: DataTypes.INTEGER, allowNull: false },
        pontos_max: { type: DataTypes.INTEGER, allowNull: false },
        img: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
      },
      { sequelize, modelName: 'Nivel', tableName: 'niveis', timestamps: false }
    );
    return Level;
  }
}

module.exports = Level;
