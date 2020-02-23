const express = require('express');
const bodyParser = require('body-parser')
const { graphqlExpress } = require('apollo-server-express');
import schema from './schema';

const app = express();

app.use('/graphiql', graphqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(4000, () => console.log(`express server running on port 4000`));

