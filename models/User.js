const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static initModel(sequelize) {
    User.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING(45), allowNull: false },
      email: { type: DataTypes.STRING(45), allowNull: false, unique: true },
      senha: { type: DataTypes.STRING(255), allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    }, { sequelize, tableName: 'usuarios' });
    return User;
  }
}

module.exports = User;
