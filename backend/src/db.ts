import NeDB from 'nedb';

let db = new NeDB({autoload: true, filename: './data.db'});

export default db;