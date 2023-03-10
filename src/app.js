const express = require('express');
const cors = require('cors');
const compression = require('compression');
const { handleSuccess } = require('../src/utils/responses/success');
const { handleError } = require('../src/utils/responses/error');

const { Ok, Created } = require('./utils/responses/success/successes');
const app = express();

app.disable('X-Powered-By');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res, next) => {
  next(new Created('hi', 'again'));
});
app.use('/api/v1', require('./app/routes/mainRouter'));

app.use((service, req, res, next) => {
  if (service instanceof Error) {
    return handleError(service, req, res);
  }
  return handleSuccess(service, req, res);
});

module.exports = app;
