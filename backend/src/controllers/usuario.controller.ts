/**
  CRUD DE USUARIO
  
  POST     /usuario
  GET      /usuario/id
  UPDATE   /usuario/id
  DELETE   /usuario/id
  
 */


import express from 'express';
import {getAll, inserir} from '../models/usuario.model';

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json(getAll());
});

router.post('/', (req, res)=>{
    inserir(req.body)
        .then(res.status(200).json)
        .catch(res.status(500).json)
});


export default router;