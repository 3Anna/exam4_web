const express = require('express');

const postRouters = require('./routers/post-routes');
const apiPostRouters = require('./routers/api-post-routes');
const createPath = require('./middlewares/create-path');

const app = express();

var engines = require('consolidate');

app.use(express.static('style'));
app.use(express.static('configs'));

const PORT = 5500;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}, Server started at port http://localhost:5500/`);
});

app.use(postRouters);
app.use(apiPostRouters);

app.use((req, res) => {
  res
    .status(404)

    .sendFile(createPath('error'));
});