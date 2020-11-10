const NeDB = require("nedb");

const DATA_PATH = "./data";

const Usuario = new NeDB({
  autoload: true,
  filename: `${DATA_PATH}/usuario.db`,
});

const Vaquinha = new NeDB({
  autoload: true,
  filename: `${DATA_PATH}/vaquinha.db`,
});

module.exports = { Usuario, Vaquinha };
