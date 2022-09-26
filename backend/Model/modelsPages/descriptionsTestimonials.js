const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('descriptionsTestimonials', {
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