const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('features', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        references: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slongan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriptionTitle: {
            type: DataTypes.STRING,
            allowNull: false
        }, fkDescriptionFeatures: {
            type: DataTypes.BIGINT,
            references: {
                model: "descriptionFeatures",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, fkActionFeatures: {
            type: DataTypes.BIGINT,
            references: {
                model: "actionFeatures",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}