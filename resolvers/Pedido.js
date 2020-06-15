export default {
    Query:{
        getPedidos:  async (parent, { IdUsuarioParticipante }, { models }, info) => {
            let pedidosFeedback = await models.Pedido.findAll({
                where:{
                    FKUsuarioParticipante: IdUsuarioParticipante
                },
                include:[{
                  association:'ProductosPedido',
                  include:'Platillo'
                }]
            })
            return pedidosFeedback;
        }
    },
    Mutation:{
        crearPedido:async (parent, { PedidoInput }, { models }, info) => {
            let pedidoInput = PedidoInput;
            let productosPedido = pedidoInput.ProductosPedido;
            delete pedidoInput.ProductosPedido; 
            let pedidoFeedback = await models.Pedido.create(PedidoInput)
            // for (const productoId in productosPedido) {
            //     await models.ProductosPedido.create({
            //         FKPedido:pedidoFeedback.IdPedido,
            //         FKPlatillo:productoId,
            //         Unidades:1
            //     })
            // }
            productosPedido.forEach( async productoId => {
                await models.ProductosPedido.create({
                    FKPedido:pedidoFeedback.IdPedido,
                    FKPlatillo:productoId,
                    Unidades:1
                })
            })
            let pedidoNuevo = await models.Pedido.findByPk(pedidoFeedback.IdPedido,{
                include:[{
                  association:'ProductosPedido',
                  include:'Platillo'
                }]
            })
            console.log(pedidoNuevo)
            return pedidoFeedback;
        }
    }
}
