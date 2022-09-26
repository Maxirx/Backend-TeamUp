const { DataTypes, Sequelize } = require('sequelize')



module.exports = (sequelize) => {
    sequelize.define('inPage', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, fkFooter: {
            type: DataTypes.BIGINT,
            references: {
                model: "footers",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, fkFeatures: {
            type: DataTypes.BIGINT,
            references: {
                model: "features",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, fkTestimonials: {
            type: DataTypes.BIGINT,
            references: {
                model: "testimonials",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, fkAreas: {
            type: DataTypes.BIGINT,
            references: {
                model: "areas",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }, fkAboutTeam: {
            type: DataTypes.BIGINT,
            references: {
                model: "aboutTeams",
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        timestamps: false
    });

}