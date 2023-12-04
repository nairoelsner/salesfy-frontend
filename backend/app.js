require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./src/routers/authRouter');
const adminRouter = require('./src/routers/adminRouter');

//Configs
PORT = 8080;
IP = "localhost";

const app = express();

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Routers
app.use(authRouter);
app.use(adminRouter);

//Rotas
app.get('/', async (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}/`);
});