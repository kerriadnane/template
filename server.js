const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;
const cors = require('cors');
const models = require('./models')


// Instantiate server
const server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// cors configuration
server.use(cors());
// static resource 
server.use(express.static("public"));

// Configure routes
server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({ "message": "server runing !!!" });
});

server.use('/api/', apiRouter);

// Launch server
models.sequelize.sync().then((req) => {
    server.listen(8002, () => {
        console.log('Server start up on port AUTH 8002');
    });
})
