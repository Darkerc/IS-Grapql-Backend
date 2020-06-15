export default {
    Query:{
        getCitas: async (parent, { IdUsuarioNutricionista }, { models }, info) => {
            let citasFeedback = await models.Cita.findAll({
                where:{
                    FKUsuarioNutricionista: IdUsuarioNutricionista
                },
                include:'UsuarioParticipante'
            })
            return citasFeedback;
        },
        getUsuariosCitas:async (parent, { IdUsuarioParticipante }, { models }, info) => {
            let usuarioCitas = await models.Cita.findAll({
                where:{
                    FKUsuarioParticipante : IdUsuarioParticipante
                },
                include:'UsuarioNutricionista'
            })
            return usuarioCitas;
        }
    },
    Mutation:{
        crearCita: async (parent, { CitaInput }, { models }, info) => {
            let citaFeedback = await models.Cita.create(CitaInput);
            return citaFeedback.toJSON();
        },
        eliminarCita: async (parent, { IdCita }, { models }, info) => {
            let citaFeedback = await models.Cita.destroy({
                where:{
                    IdCita
                }
            })
            return citaFeedback
        }
    }
}