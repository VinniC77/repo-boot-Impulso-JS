import { Router } from 'express';
import { UsersControllers } from '../controllers/usersControllers';

const routes = Router();
const usersControllers = new UsersControllers()

// routes recebe 2 parametros, a primeira uma string que é o nome da rota e o segundo parametro é uma função que recebe 2 parametros: um requerimento e uma resposta
routes.get('/users', usersControllers.listarUsuario)

routes.post('/users', usersControllers.criarUsuario)

// GET - ler/listar os dados
// POST - criar/cadastrar os dados
// PUT/PATCH - editar os dados
// DELETE - deletar os dados

// Além dos métodos, o backend também trabalha com os códigos de estadom os STATUS CODE,
// STATUS CODE
// 200 - Sucesso e 201 - Conseguimos criar um dado
// 404 - Página não Encontrada

export { routes };