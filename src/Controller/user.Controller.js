const AppError = require('../utils/AppError')

class UserController {
    /**
     * index - GET listart registros.
     * show - GET exibir registro especifico.
     * create - POST - criar registro.
     * update - PUT - atualizar registro.
     * delete - DELETE remover registro.
     * maximo 5 metodos por class.
     */
        create(request, response){
            const { name, email, password } = request.body

                if(!name){
                    throw new AppError('Nome é OBRIGATÓRIO!')
                }

            response.status(201).json({name, email, password})

        }

}

module.exports= UserController;