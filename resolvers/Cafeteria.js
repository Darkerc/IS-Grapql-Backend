import makeQuery from '../Utils/makeQuery'

export default {
  Query:{
    Cafeterias: async (parent, args, { db }, info) => {
        //'SELECT *, FKUsuarioProveedor as UsuarioProveedor FROM Cafeteria'
        let cafeteriaData = await makeQuery(db,
            'select * from cafeteria'
        )
        console.log(cafeteriaData)
        return cafeteriaData;
    }
  }
}
