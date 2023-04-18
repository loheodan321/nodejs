const aloalo = '<></>';

const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const errorRouter = require('./routes/error');

const app = express();

app.use(bodyParser.urlencoded());

app.use(adminRouter);
app.use(errorRouter);

app.listen(8080);
