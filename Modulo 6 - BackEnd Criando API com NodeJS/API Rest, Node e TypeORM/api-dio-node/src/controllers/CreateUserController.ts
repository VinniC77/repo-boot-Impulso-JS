import { Request, Response } from 'express';

class CreateUserController {
    handle(req: Request, res: Response) {
        return res.json([
            {
                nome: 'Vinicius'
            },
            {
                nome: 'Maria'
            },
            {
                nome: 'Joao'
            }
        ])
    }
}

export { CreateUserController }