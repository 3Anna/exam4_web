const express = require('express');

const postRouters = require('./routers/post-routes');
const apiPostRouters = require('./routers/api-post-routes');
const createPath = require('./middlewares/create-path');

const app = express();

var engines = require('consolidate');


app.use(express.static('style'));
app.use(express.static('images'));
app.use(express.static('configs'));

app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

const PORT = 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}, Server started at port http://localhost:3000/`);
});

app.use(postRouters);
app.use(apiPostRouters);

app.use((req, res) => {
  res
    .status(404)

    .sendFile(createPath('error'));
});