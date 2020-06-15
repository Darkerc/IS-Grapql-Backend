export default {
    Query:{
        getPlatillosProducto: async (parent, { FKCafeteria }, { models }, info) => {
            let ppFeedback = await models.PlatilloProducto.findAll({ 
                where:{
                    FKCafeteria
                },
                includes:'Cafeteria'
            })
            return ppFeedback;
        }
    }
}