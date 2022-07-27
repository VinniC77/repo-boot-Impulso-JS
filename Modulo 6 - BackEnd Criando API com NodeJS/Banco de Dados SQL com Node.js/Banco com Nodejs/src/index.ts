import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rota
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})