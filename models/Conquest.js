const { Model, DataTypes } = require('sequelize');

class Conquest extends Model {
  static initModel(sequelize) {
    Conquest.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
        descricao: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null },
        img: { type: DataTypes.STRING(45), allowNull: false },
      },
      { sequelize, modelName: 'Conquista', tableName: 'conquista', timestamps: false }
    );
    return Conquest;
  }
}

module.exports = Conquest;
