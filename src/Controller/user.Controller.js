const AppError = require('../utils/AppError')
const sqliteConection = require('../database/sqlite');



class UserController {
    /**
     * index - GET listart registros.
     * show - GET exibir registro especifico.
     * create - POST - criar registro.
     * update - PUT - atualizar registro.
     * delete - DELETE remover registro.
     * maximo 5 metodos por class.
     */
        async create(request, response){
            const { name, email, password } = request.body
            const database = await sqliteConection();
            const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

            if(checkUserExists){
                throw new AppError('Este E-mail já está em uso');
            }

            await database.run("INSERT INTO users (name, email, password) VALUES(?, ?, ?)",[name, email, password]);

            return response.status(201).json();
        }
};

module.exports= UserController;