/** 
  CRUE(ncerramento) DE VAQUINHA
  
  POST     /vaquinha
  GET      /vaquinha/id
  UPDATE   /vaquinha/id
  DELETE   /vaquinha/id
  
 */

import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send('vaquinha');
});


export default router;


