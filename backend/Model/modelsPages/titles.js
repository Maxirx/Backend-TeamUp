const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('titles', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        tittle: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkDescriptions: {
            type: DataTypes.BIGINT,
            references: {
                model: "descriptions",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}