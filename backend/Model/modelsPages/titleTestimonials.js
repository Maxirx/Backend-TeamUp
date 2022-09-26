const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('titleTestimonials', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkDescriptionsTest: {
            type: DataTypes.BIGINT,
            references: {
                model: "descriptionsTestimonials",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}