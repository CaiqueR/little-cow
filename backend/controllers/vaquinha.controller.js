/** 
  CRUE(ncerramento) DE VAQUINHA
  
  POST     /vaquinha
  GET      /vaquinha/id
  UPDATE   /vaquinha/id
  DELETE   /vaquinha/id
  
 */

const express = require("express");
const {
  findVaquinhas,
  inserir,
  remove,
  contribuir,
} = require("../models/vaquinha.model");

const router = express.Router();

router.all("/ping", (req, res) => {
  res.status(200).json({
    message: "ok",
    body: req.body,
    header: req.headers,
    query: req.query,
  });
});

router.get("/", (req, res) => {
  let query = req.query;
  findVaquinhas(query)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  inserir(req.body)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

router.post("/contribuir/:id", (req, res) => {
  let idVaq = req.params.id;
  let contr = req.body;
  /**
   * valor: number,
   * nomeContribuidor: string
   */
  contribuir(idVaq, contr)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  remove(req.params.id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
