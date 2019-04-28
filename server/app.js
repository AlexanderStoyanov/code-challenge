const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api');
const PORT = 3030;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(api);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`));
