import { Request, Response } from "express";
import { database } from "../src/database"

export class UsersControllers {
    criarUsuario (request: Request, response: Response): Response {
        const { name } = request.body
    
        if(name.length < 1) {
            return response.status(403).json({Mensagem: 'Não é possível criar usuários sem um nome'})
        }
    
        database.push(name)
        return response.status(201.).json({'Mensagem': `Usuário ${name} criado.`})
    }

    listarUsuario(request: Request, response: Response): Response {
        return response.status(200).json(database);
    }
}