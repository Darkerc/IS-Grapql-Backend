import { DataTypes } from 'sequelize'
import Usuario from './Usuario.model'
import ProductosPedido from './ProductosPedido'

const PedidoModel = sequelizeObj => {
    if(sequelizeObj.models.Pedido) return sequelizeObj.models.Pedido;

    let Pedido = sequelizeObj.define('Pedido',{
        IdPedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FKUsuarioParticipante:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PrecioTotal:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        CaloriasTotales:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        MetodoPago:{
            type: DataTypes.ENUM('Efectivo','Tarjeta'),
            allowNull: false
        },
        FechaEntrega:{
            type: DataTypes.DATEONLY
        },
        LugarEntrega:{
            type:DataTypes.STRING
        }

    })

    Pedido.belongsTo(Usuario(sequelizeObj), { foreignKey:'FKUsuarioParticipante' })
    Pedido.hasMany(ProductosPedido(sequelizeObj), { foreignKey:'FKPedido', as:'ProductosPedido' }) 

    return Pedido
}

export default PedidoModel;