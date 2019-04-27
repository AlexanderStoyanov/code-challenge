const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');
const cors = require('cors');

const api = require('./api');
const PORT = 3030;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(api);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//serve all static files
//app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`));
