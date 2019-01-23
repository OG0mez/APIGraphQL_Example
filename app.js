require('dotenv').config();
import express from 'express';
const schema = require('./db/schema');
const app = express();
import graphlHTTP from 'express-graphql'
app.use('/graphql',graphlHTTP({
    schema:schema,
    graphiql:true
}));
module.exports = app;