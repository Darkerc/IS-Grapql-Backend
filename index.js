import express from 'express';
import path from 'path'
import conecction from './Utils/dbConection'
import { ApolloServer } from 'apollo-server-express'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const apolloServer = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: async () => ({ 
    db: await conecction 
  }) 
})
const app = express()

apolloServer.applyMiddleware({ app })

app.listen({ port:4000 }, () => {
  console.log(`Server on http://localhost:4000${apolloServer.graphqlPath}`)
})