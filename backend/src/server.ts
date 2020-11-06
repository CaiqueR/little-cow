import express from 'express';
import usuarioController from './controllers/usuario.controller';
import vaquinhaController from './controllers/vaquinha.controller';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use('/usuario', usuarioController);
app.use('/vaquinha', vaquinhaController);

app.listen(PORT, ()=>{
    console.log(`Escutando na porta ${PORT}`);
});
