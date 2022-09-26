const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('actionFeatures', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }, description: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });

}