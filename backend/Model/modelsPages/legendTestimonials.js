const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('legendTestimonials', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkTitleTest: {
            type: DataTypes.BIGINT,
            references: {
                model: "titleTestimonials",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}