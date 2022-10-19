// List the Dependencies
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const initWebRoutes = require('./server/router/router')

// Create Express Server
const app = express();
const PORT = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static Public Folder
app.use(express.static(path.join(__dirname, "./public")));

// Template Engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Router Init
initWebRoutes(app);

// Init Listen
app.listen(PORT, () => console.log(`Server running http://127.0.0.1:${PORT}/`)); // This port is defined in the system ENV