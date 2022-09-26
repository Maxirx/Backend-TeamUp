const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('items', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        items: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

}