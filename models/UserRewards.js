const { Model, DataTypes } = require('sequelize');

class UserRewards extends Model {
  static initModel(sequelize) {
    UserRewards.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_usuario: { type: DataTypes.INTEGER, allowNull: false },
        id_conquista: { type: DataTypes.INTEGER, allowNull: false },
        data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      },
      { sequelize, modelName: 'UsuariosConquista', tableName: 'usuarios_conquistas', timestamps: false }
    );
    return UserRewards;
  }
}

module.exports = UserRewards;
