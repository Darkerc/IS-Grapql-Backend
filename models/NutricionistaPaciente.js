import { DataTypes } from 'sequelize'
import Usuario from './Usuario.model'

const NPModel = sequelizeObj => {
    if(sequelizeObj.models.NutricionistaPaciente) return sequelizeObj.models.NutricionistaPaciente;

    let NutricionistaPaciente = sequelizeObj.define('NutricionistaPaciente',{
        IdNutricionistaPaciente:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKUsuarioParticipante:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FKUsuarioNutricionista:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })

    NutricionistaPaciente.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioParticipante', as:'UsuarioParticipante' })
    NutricionistaPaciente.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioNutricionista', as:'UsuarioNutricionista' })

    return NutricionistaPaciente
}

export default NPModel;