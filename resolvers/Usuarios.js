export default {
  Query:{
    Usuarios: async (parent, args, { models }, info) => {
      return await models.Usuario.findAll()
    },
  },
  Mutation:{
    insertarUsuario: async (parent, { UsuarioInput }, { models }, info) => {
      UsuarioInput.Contraseña = UsuarioInput.Contrasena
      delete UsuarioInput.Contrasena
      let usuarioFeedback = await models.Usuario.create(UsuarioInput)
      return usuarioFeedback.toJSON()
    },
    ObtenerUsuario: async (parent, {Correo, Contrasena}, { models }, info) => {
      return await models.Usuario.findOne({
        where:{
          Correo,
          Contraseña:Contrasena
        }
      })
    }
  }
}
