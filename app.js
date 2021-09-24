const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE

app.use(morgan('tiny'));
// static directory for static files - pointing to the "public" directory
app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);
app.set('views', './src/views');
app.set('view engine', 'pug');

// The way Express works, is that everything works through app
app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'] });
});

app.listen(port, () => {
  debug(`Listening on Port ${chalk.green(port)}`);
});
