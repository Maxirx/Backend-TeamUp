const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('descriptionAreas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

}