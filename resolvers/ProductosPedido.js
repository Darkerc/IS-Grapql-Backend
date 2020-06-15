export default {
    Query:{
        getProductoPedido: async (parent, { IdPedido, IdPlatillo }, { models }, info) => {
            let ppFeedback = await models.ProductosPedido.findOne({
                where:{
                    FKPedido: IdPedido,
                    FKPlatillo: IdPlatillo
                },
                include:'Platillo'
            })
            console.log(ppFeedback)
            return ppFeedback;
        }
    }
}