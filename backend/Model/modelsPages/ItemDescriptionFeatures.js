const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('itemDescriptionFeatures', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

}