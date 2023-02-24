const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
})


// DATABASE

const models = require('./db/models/index')

/* Routes */
const { testRouter } = require('./db/routes/Test')

/* END POINTS */

app.use('/test', testRouter)


/* DATABASE CONNECTION */
//Initialize Database
const connection = async () => {
    try {
        await models.sequelize.authenticate();
        console.info('Database Connection Successful');
    } catch (error) {
        console.warn('Database Connection Cannot Be Established', error);
    }
};

const syncModels = async () => {
    try {
        await models.sequelize.sync();
        console.info('Model Sync Successful');
    } catch (error) {
        console.warn('Failed to Sync Models:', error);
    }
};

connection();
syncModels();


// END DATABASE


app.listen(port, () => {
    console.log(`App listening on port :${port}`);
})