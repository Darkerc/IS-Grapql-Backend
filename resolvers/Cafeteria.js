export default {
  Query:{
    CafeteriasUsuario: async (parent, args, { models }, info) => {
      let cafeteriaFeedback = await models.Cafeteria.findAll({ include:'Usuario' })
      return cafeteriaFeedback;
    },
    CafeteriasPlatillos:async (parent, args, { models }, info) => {
      let cafeteriasPlatillosFB = await models.Cafeteria.findAll({ 
        include:'Platillos', 
      })
      return cafeteriasPlatillosFB;
    },
    getCafeteriasPlatillos: async (parent, {IdUsuarioProveedor}, { models }, info) => {
      let cafeteriasPlatillosFB = await models.Cafeteria.findAll({ 
        include:'Platillos', 
        where:{
          FKUsuarioProveedor:IdUsuarioProveedor
        }
      })
      return cafeteriasPlatillosFB;
    }
  },
  Mutation:{
    insertarCafeteria: async (parent, { CafeteriaInput }, { models }, info) => {
      let cafeteriaFeedback = await models.Cafeteria.create(CafeteriaInput)
      return cafeteriaFeedback.toJSON();
    },
    getCafeteria:async (parent, { IdCafeteria }, { models }, info) => {
      let cafeteriaFeedback = await models.Cafeteria.findByPk(IdCafeteria)
      return cafeteriaFeedback;
    },
  }
}
