import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import usuarioController from './controllers/usuario.controller';
import vaquinhaController from './controllers/vaquinha.controller';

const app = express();
const PORT = process.env.PORT || 8080;

// //options for cors midddleware
// const options: cors.CorsOptions = {
//   allowedHeaders: [
//     'Origin',
//     'X-Requested-With',
//     'Content-Type',
//     'Accept',
//     'X-Access-Token',
//   ],
//   credentials: true,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: '*',
//   preflightContinue: false,
// };

//use cors middleware
app.use(cors());

// //enable pre-flight
// app.options('*', cors(options));

app.use(express.json());
app.use(morgan('common'));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use('/usuario', usuarioController);
app.use('/vaquinha', vaquinhaController);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
