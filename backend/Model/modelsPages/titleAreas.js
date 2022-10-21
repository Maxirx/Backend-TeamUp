const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('titleAreas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}