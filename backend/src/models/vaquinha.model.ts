/**
  Vaquinha:
  {
       // Obrigatório
       titulo: string, 
       descricao: string,
       descricaoCurta: string,
       autor: string,   // nome do autor
       meta: number,    // quantos bitCows ela deve alcançar 

       // Preenchido Automaticamente
       bitCows: number,
       criacao: Date,
       encerramento: Date,
       encerrada: boolean,
       contribuidores: {
         nomeContribuidor: valor
       },
  }
 */

import { Vaquinha } from '../db';
import { Usuario } from '../db';

function checkField(obj, field, erros) {
  if (!obj[field]) erros.push(field + ' não informado(a).');
}

/** Valida os campos de uma vaquinha */
function validar(v) {
  let erros = [];

  // EXEMPLOS DE ERROS:
  if (!v) return { pass: false, erros: ['Vaquinha não informada'] };
  checkField(v, 'titulo', erros);
  checkField(v, 'meta', erros);
  checkField(v, 'autor', erros);
  checkField(v, 'descricao', erros);
  checkField(v, 'descricaoCurta', erros);

  if (v.titulo && v.titulo.length < 2)
    erros.push('O titulo deve ter pelo menos 2 caracteres.');

  return erros.length > 0 ? { pass: false, erros } : { pass: true, erros: [] };
}

/**
 * Pre-cadastra uma vaquinha, adicionando informações
 * preliminares ao objeto. As informações inseridas
 * são:
 * - Data de Cadastro: data Atual
 * - bitCows: 0.0
 * - encerrada: false
 */
function precadastrar(v) {
  v.dataCadastro = new Date();
  v.bitCows = 0.0;
  v.encerrada = false;
  v.contribuidores = {};
  return v;
}

/**
 * Adiciona uma nova vaquinha:
 * - titulo: string,
 * - descricao: string,
 * - autor: string,
 * - meta: number,
 * - bitCows: number,
 * - criacao: Date,
 * - encerramento: Date,
 * - encerrada: boolean,
 * - contribuidores: [Usuario],
 */
export function inserir(vaquinha) {
  return new Promise((resolve, reject) => {
    let validacao = validar(vaquinha);
    if (!validacao.pass) reject(validacao.erros);
    precadastrar(vaquinha);
    Vaquinha.insert(vaquinha, (err, doc) => {
      if (err) return reject(err);
      return resolve(doc);
    });
  });
}

/** Contribui com uma vaquinha */
export function contribuir(idVaq, contr) {
  contr.valor *= 1;
  return new Promise((resolve, reject) => {
    if (contr.valor <= 0) return reject('O valor deve ser > 0');
    Usuario.findOne({ nome: contr.nomeContribuidor }, (err, user) => {
      if (err) return reject(err);
      if (user.bitCows < contr.valor)
        return reject('Você não tem saldo suficiente');
      Vaquinha.findOne({ _id: idVaq }, (err, vaq) => {
        if (err) return reject(err);
        user.bitCows *= 1;
        vaq.bitCows *= 1;
        user.bitCows -= contr.valor;
        //...
        if (!vaq.contribuidores[user.nome])
          vaq.contribuidores[user.nome] = contr.valor;
        else vaq.contribuidores[user.nome] += contr.valor;
        vaq.bitCows += contr.valor;
        Usuario.update({ nome: user.nome }, user, {}, (err, n) => {
          Vaquinha.update({ _id: idVaq }, vaq, {}, (err, n) => {
            return resolve(n);
          });
        });
      });
    });
  });
}

/** Procura vaquinhas */
export function findVaquinhas(query) {
  let sort = null;
  if (query.sort) {
    sort = query.sort;
    delete query.sort;
  }
  return new Promise((resolve, reject) => {
    Vaquinha.find(query, (err, docs) => {
      if (err) return reject(err);
      if (sort) {
        if (sort == 'bitCows')
          docs = docs.sort((a, b) => {
            return b.bitCows - a.bitCows;
          });
        else if (sort == 'contribuicoes')
          docs = docs.sort((a, b) => {
            return (
              Object.keys(b.contribuidores).length -
              Object.keys(a.contribuidores).length
            );
          });
        else {
          docs = docs.sort((a, b) => {
            return b[sort] - a[sort];
          });
        }
      }
      return resolve(docs);
    });
  });
}

/** Deleta vaquinhas */
export function remove(id) {
  return new Promise((resolve, reject) => {
    if (!id) return reject('id não informado');
    Vaquinha.remove({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    });
  });
}
