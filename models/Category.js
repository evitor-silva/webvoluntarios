const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(45), allowNull: false },
      },
      { sequelize, modelName: 'Categoria', tableName: 'categorias', timestamps: false }
    );
    return Category;
  }
}

module.exports = Category;
