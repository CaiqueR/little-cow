import NeDB from 'nedb';

const DATA_PATH = './data';

export const Usuario =  new NeDB({autoload: true, filename: `${DATA_PATH}/usuario.db`});
export const Vaquinha = new NeDB({autoload: true, filename: `${DATA_PATH}/vaquinha.db`});