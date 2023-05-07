const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
require('./src/routes/index')(app);
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000
app.listen(port, () => {
    (async () => {
        const database = require('./db');
           try {
            const resultado = await database.sync();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
     })();
    console.log("Servidor está rodando...")
});