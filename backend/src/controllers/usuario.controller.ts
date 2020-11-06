/**
  CRUD DE USUARIO
  
  POST     /usuario
  GET      /usuario/id
  GET      /usuario/all
  UPDATE   /usuario/id
  DELETE   /usuario/id
  
 */


import express from 'express';
import {getAll, inserir} from '../models/usuario.model';

const router = express.Router();

router.get('/all', (req, res)=>{
    res.status(200).json(getAll());
});

router.post('/', (req, res)=>{
    inserir(req.body)
        .then(doc=>res.status(200).json(doc))
        .catch(err=>res.status(500).json(err));
});


export default router;