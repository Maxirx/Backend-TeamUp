const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {
    sequelize.define('personas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        primerNombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,

        },
        celular: {
            type: DataTypes.STRING,

        },
        areaVoluntario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carrera: {
            type: DataTypes.STRING,
            allowNull: false
        },

        medio: {
            type: DataTypes.STRING,

        },
    });
}