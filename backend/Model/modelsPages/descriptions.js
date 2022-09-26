const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('descriptions', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        descriptionsField: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkItems: {
            type: DataTypes.INTEGER,
            references: {
                model: "items",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}