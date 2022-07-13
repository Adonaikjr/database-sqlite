require('express-async-errors');

const AppError = require('./src/utils/AppError')
const database = require("./src/database/sqlite")


const express = require('express');

const routes = require('./src/routes');

const app = express();

app.use(express.json());

app.use(routes);

database();


app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            mensagem: error.mensagem
        })
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        mensagem: 'erro interno no servidor'
    })
});




const PORT = 3333;
app.listen(PORT, () => console.log(`Server Online 🚀 in Port:${PORT}`))

