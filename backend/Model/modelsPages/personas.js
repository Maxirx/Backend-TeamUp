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
        segundoNombre: {
            type: DataTypes.STRING,

        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        segundoApellido: {
            type: DataTypes.STRING,

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
        ciudadDeResidencia: {
            type: DataTypes.STRING,

        },
        areaVoluntario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estudios: {
            type: DataTypes.STRING,
            allowNull: false
        },
        institucionEducativa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        semestre: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        medio: {
            type: DataTypes.STRING,

        },
    });
}