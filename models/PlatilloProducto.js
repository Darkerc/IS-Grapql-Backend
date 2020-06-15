import { DataTypes } from 'sequelize'
import ProductosPedido from './ProductosPedido'
import Cafeteria from './Cafeteria.model'

const PlatilloProductoModel = sequelizeObj => {
    if(sequelizeObj.models.PlatilloProducto) return sequelizeObj.models.PlatilloProducto;

    let PlatilloProducto = sequelizeObj.define('PlatilloProducto',{
        IdPlatillo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKCafeteria:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        NombrePlatillo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Calorias:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        Precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        PlatilloImg:{
            type: DataTypes.TEXT({
                length:"medium"
            })
        },
        Existencias:{
            type: DataTypes.INTEGER,
        }

    })

    // PlatilloProducto.belongsTo(Pedido(sequelizeObj), { foreignKey:'FKPedido' })
    PlatilloProducto.hasMany(ProductosPedido(sequelizeObj), { foreignKey:'FKPlatillo', as:'Platillo' }) 
    PlatilloProducto.belongsTo(Cafeteria(sequelizeObj), { foreignKey:'FKCafeteria', as:'Platillos' })

    return PlatilloProducto
}

export default PlatilloProductoModel;