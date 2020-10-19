import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hellow mundo' }));

app.listen(3333);
