import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from '../resolver';


const  typeDefs = `

type Product {
    _id : ID!,
    title :  String,
    qty: Int
}

type Query{
    getProduct(_id:ID!) : Product
    allProducts: [Product]
}

input productInput{
    title:String,
    qty:Int
}

type Mutation{
    createProduct(input:productInput) : Product
    updateProduct(_id:ID!,input:productInput) : Product
    deleteProduct(_id:ID!):Product
}`;

const schema =  makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;