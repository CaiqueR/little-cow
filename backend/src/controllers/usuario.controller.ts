/**
  CRUD DE USUARIO
  
  POST     /usuario
  GET      /usuario/id
  GET      /usuario/all
  UPDATE   /usuario/id
  DELETE   /usuario/id
  
 */

import express from 'express';
import {
  findUsers,
  getAll,
  inserir,
  removeUser,
} from '../models/usuario.model';

const router = express.Router();

router.all('/ping', (req, res) => {
  res.status(200).json({
    message: 'ok',
    body: req.body,
    header: req.headers,
    query: req.query,
  });
});

router.get('/', (req, res) => {
  let query = req.query;
  findUsers(query)
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(err));
});

router.get('/all', (req, res) => {
  try {
    res.status(200).json(getAll());
  } catch (ex) {
    res.status(500).json(ex);
  }
});

router.post('/', (req, res) => {
  inserir(req.body)
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  removeUser(req.params.id)
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(err));
});

export default router;
