import { DataTypes } from 'sequelize'
import Usuario from './Usuario.model'

const CitaModel = sequelizeObj => {
    if(sequelizeObj.models.Cita) return sequelizeObj.models.Cita;

    let Cita = sequelizeObj.define('Cita',{
        IdCita:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKUsuarioParticipante:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        FKUsuarioNutricionista:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        FechaCita:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        Motivo:{
            type: DataTypes.TEXT('tiny'),
            allowNull: false,
        }
    })

    Cita.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioParticipante', as:'UsuarioParticipante' })
    Cita.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioNutricionista', as:'UsuarioNutricionista' })

    return Cita
}

export default CitaModel;