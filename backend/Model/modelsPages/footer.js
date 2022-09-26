const { DataTypes, Sequelize } = require('sequelize')




module.exports = (sequelize) => {
    sequelize.define('footer', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkTitle: {
            type: DataTypes.INTEGER,
            references: {
                model: "titles",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false/* ,
            sequelize, // We need to pass the connection instance
            modelName: 'title' // We need to choose the model name */
    });

}