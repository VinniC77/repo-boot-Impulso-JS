import express from 'express';
import { router } from './routes';

const server = express();

server.use(router);

server.listen(5000, () => {
    console.log('Servidor ON na porta 5000 http://localhost:5000/');
})

// Criar um usuario       C - Create - POST
// Selecionar um usuario  R - Read   - GET
// Editar um usuario      U - Update - PUT/PATCH
// Deletar um usuaio      D - Delete - DELETE
// Uma API que consegue realizar essas 4 funções é considerada uma API RESTFULL