const { Model, DataTypes } = require('sequelize');

class Avaliation extends Model {
    static initModel(sequelize) {
        Avaliation.init(
            {
                id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
                solicitacoes_id: { type: DataTypes.INTEGER, allowNull: false },
                comentario: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
                nota: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
                data: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
            },
            { sequelize, modelName: 'Avaliacao', tableName: 'avaliacaos', timestamps: false }
        );
        return Avaliation;
    }
}

module.exports = Avaliation;
