import express from 'express';
import path from 'path'
import Sequelize from "sequelize";
import makeAllModels from './Utils/makeAllModels'
import seedDatabase from "./Utils/seedDatabase";
import { ApolloServer } from 'apollo-server-express'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const initServer = async () => {
  const sequelize = new Sequelize('bd_nutricion','root','',{
    host:'localhost',
    dialect:"mysql"
  })

  makeAllModels('./models/', sequelize)
  await sequelize.sync({ force:true }) 
  await seedDatabase(sequelize)
  
  const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
  const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
  
  const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: () => ({ 
      models: sequelize.models
    }) 
  })
  const app = express()
  
  apolloServer.applyMiddleware({ app })
  
  app.listen(4000,'192.168.0.5', () => {
    console.log(`Server on http://192.168.0.5:4000${apolloServer.graphqlPath}`)
  })
}

initServer();