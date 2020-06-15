import { DataTypes } from 'sequelize'
import Usuario from './Usuario.model'
import PlatilloProducto from './PlatilloProducto'

const CafeteriaModel = sequelizeObj => {
    if(sequelizeObj.models.Cafeteria) return sequelizeObj.models.Cafeteria;

    let Cafeteria = sequelizeObj.define('Cafeteria',{
        IdCafeteria:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKUsuarioProveedor:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Edificio:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Foto:{
            type:DataTypes.TEXT('long')
        },
        Telefono:{
            type: DataTypes.STRING
        }
    })

    Cafeteria.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioProveedor' })
    Cafeteria.hasMany(PlatilloProducto(sequelizeObj), { foreignKey:'FKCafeteria', as:'Platillos' })

    return Cafeteria
}

export default CafeteriaModel;