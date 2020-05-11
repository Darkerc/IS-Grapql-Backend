import makeQuery from '../Utils/makeQuery'

export default {
  Query:{
    Usuarios: async (parent, args, { db }, info) => {
      let userResponse = await makeQuery(db, 'SELECT *, Contraseña as Contrasena FROM usuarios')
      return userResponse;
    }
  }
}
