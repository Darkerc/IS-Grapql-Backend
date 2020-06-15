import { DataTypes } from 'sequelize'
import Pedido from './Pedido'
import PlatilloProducto from './PlatilloProducto'

const PPModel = sequelizeObj => {
    if(sequelizeObj.models.ProductosPedido) return sequelizeObj.models.ProductosPedido;

    let ProductosPedido = sequelizeObj.define('ProductosPedido',{
        IdProductosPedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKPedido:{
            type: DataTypes.INTEGER,
            allowNull: false   
        },
        FKPlatillo:{
            type: DataTypes.INTEGER,
            allowNull: false   
        },
        Unidades:{
            type: DataTypes.INTEGER,
            defaultValue:1
        }
    })

    // ProductosPedido.belongsTo(Pedido(sequelizeObj), { foreignKey:'FKPedido', })
    ProductosPedido.belongsTo(PlatilloProducto(sequelizeObj), { foreignKey:'FKPlatillo', as:'Platillo' })

    return ProductosPedido
}

export default PPModel;