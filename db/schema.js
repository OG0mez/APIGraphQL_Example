import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from '../resolver';


const  typeDefs = `

type Product {
    _id : ID!,
    title :  String,
    qty: Int
}

type Query{
    allProducts: [Product]
}
`;

const schema =  makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;