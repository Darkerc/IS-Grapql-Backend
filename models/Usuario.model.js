import { DataTypes } from 'sequelize'
import Cita from './Cita.model'
import Cafeteria from './Cafeteria.model'
import NutricionistaPaciente from './NutricionistaPaciente'
import Pedido from './Pedido'

const UsuarioModel =  sequelizeObj => {
    if(sequelizeObj.models.Usuario) return sequelizeObj.models.Usuario;

    let Usuario = sequelizeObj.define('Usuario',{
        IdUsuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        PrimerApellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        SegundoApellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Contraseña:{
            type: DataTypes.TEXT({
                length:"long"
            }),
            allowNull: false
        },
        TipoUsuario:{
            type: DataTypes.ENUM('Participante','Administrador','Proveedor','Nutricionista'),
            allowNull: false
        },
        FechaNacimiento:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Direccion:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        Telefono:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Correo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Pais:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Genero:{
            type: DataTypes.ENUM('Hombre', 'Mujer'),
            allowNull: false
        },
        UsuarioImg:{
            type: DataTypes.TEXT({
                length:"medium"
            })
        },
        NSS:{
            type: DataTypes.STRING
        },
        NoControl:{
            type: DataTypes.STRING
        },
    })

    // Usuario.hasMany(Cita(sequelizeObj), { foreignKey:'FKUsuarioParticipante', as:'UsuarioParticipante' })
    // Usuario.hasMany(Cita(sequelizeObj), { foreignKey:'FKUsuarioNutricionista',  as:'UsuarioNutricionista' })
    Usuario.hasMany(Cafeteria(sequelizeObj), { foreignKey:'FKUsuarioProveedor' })
    Usuario.hasMany(NutricionistaPaciente(sequelizeObj), { foreignKey:'FKUsuarioParticipante', as:'UsuarioParticipante' })
    Usuario.hasMany(NutricionistaPaciente(sequelizeObj), { foreignKey:'FKUsuarioNutricionista', as:'UsuarioNutricionista' })
    Usuario.hasMany(Pedido(sequelizeObj), { foreignKey:'FKUsuarioParticipante' })

    return Usuario
}

export default UsuarioModel;