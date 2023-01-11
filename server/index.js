const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const  mongoose  = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://hishammpsnhn:xl55YXCtMYbpqhuv@cluster0.giyck6p.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connected to MongoDB");
  });
  
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql:true
}));


app.listen(5000, () => {
    console.log('listening on port 5000')
})