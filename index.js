const app = require('./app');
const {PORT} = process.env;
const routes = require('./routes/routes');

routes(app);


app.listen(PORT,console.log(`server running on port: ${PORT}`));