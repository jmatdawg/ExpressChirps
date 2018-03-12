let express = require('express');
let cors = require('cors');
let apiRoutes = require('./routes');

let app = express();

app.use(cors());

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(3000);