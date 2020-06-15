import fs from 'fs'
const getAllModels = (path, sequelizeObj) => {
    let modelsRoutes = fs.readdirSync(path)
    modelsRoutes.forEach( async model => {
        let sequelizeModel = require(`../models/${model}`).default
        await sequelizeModel(sequelizeObj)
    })
}

export default getAllModels;