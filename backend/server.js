const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const usuarioController = require("./controllers/usuario.controller");
const vaquinhaController = require("./controllers/vaquinha.controller");

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
app.use(morgan("common"));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("little-cow");
});

app.use("/usuario", usuarioController);
app.use("/vaquinha", vaquinhaController);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
