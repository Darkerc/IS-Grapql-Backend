import { Op } from "sequelize";

export default {
    Query:{
        Pacientes: async (parent, { IdUsuarioNutricionista }, { models }, info) => {
            let pacientesFeedback = await models.NutricionistaPaciente.findAll({
                where:{
                    FKUsuarioNutricionista: IdUsuarioNutricionista
                },
                include:['UsuarioParticipante','UsuarioNutricionista']
            })
            return pacientesFeedback;
        },
        getNotPacientes: async (parent, { IdUsuarioNutricionista }, { models }, info) => {
            let pacientesNutricionista = await models.NutricionistaPaciente.findAll({
                where:{
                    FKUsuarioNutricionista: IdUsuarioNutricionista
                },
                include:['UsuarioParticipante']
            })
            let pacientesId = pacientesNutricionista.map(({FKUsuarioParticipante})=>FKUsuarioParticipante);
            [].length
            let pacientesDisponibles = await models.Usuario.findAll({
                where:{
                    [Op.not]:{
                        [Op.or]:{
                            IdUsuario:pacientesId.length === 0 ? [0] : pacientesId,
                            TipoUsuario:['Nutricionista','Proveedor'],
                        }
                    }
                }
            })
            return pacientesDisponibles;
        }
    },
    Mutation:{
        addPaciente: async (parent, { IdUsuarioNutricionista, IdUsuario }, { models }, info) => {
            let nutricionistaPaciente = await models.NutricionistaPaciente.create({
                FKUsuarioNutricionista: IdUsuarioNutricionista,
                FKUsuarioParticipante: IdUsuario
            },{
                include:'UsuarioParticipante'
            })
            return nutricionistaPaciente;
        },
        deletePaciente: async (parent, { IdNutricionistaPaciente }, { models }, info) => {
            let isUsuarioDeleted = await models.NutricionistaPaciente.destroy({
                where:{
                    IdNutricionistaPaciente
                }
            })
            return isUsuarioDeleted;
        }
    }
}