/**
  Usuario:
  {
       nome: string,
       dataNascimento: number,
       email: string,
       bitCows: number, // dinheiro virtual do usuario 
       dataCadastro: Date,
  }
 */

import { Usuario } from '../db';

Usuario.ensureIndex({ fieldName: 'nome', unique: true });
Usuario.ensureIndex({ fieldName: 'email', unique: true });

function checkField(obj, field, erros, msg = null) {
  if (!obj[field]) erros.push(msg == null ? field + ' não informado(a).' : msg);
}

/** Valida os campos de um usuario */
function validar(u) {
  let erros = [];

  // EXEMPLOS DE ERROS:
  if (!u) return { pass: false, erros: ['Usuário não informado'] };
  checkField(u, 'nome', erros);
  checkField(u, 'dataNascimento', erros);
  checkField(u, 'email', erros);

  if (u?.nome && u.nome.length < 2)
    erros.push('O nome deve ter pelo menos 2 caracteres');
  if (u?.dataNascimento && u.dataNascimento < 18)
    erros.push('O usuario deve ter pelo menos 18 anos');
  // etc...

  return erros.length > 0 ? { pass: false, erros } : { pass: true, erros: [] };
}

/**
 * Pre-cadastra um usuário, adicionando informações
 * preliminares ao objeto. As informações inseridas
 * são:
 * - Data de Cadastro: data Atual
 * - bitCows: 0.0
 */
function precadastrar(u) {
  u.dataCadastro = new Date();
  u.bitCows = 1000.0;
  return u;
}

/**
 * Adiciona um novo usuário:
 * - nome: string
 * - dataNascimento: number
 * - email: string
 * - bitCows: number (preenchido autom.)
 * - dataCadastro: Date (preenchido autom.)
 */
export function inserir(usuario) {
  return new Promise((resolve, reject) => {
    let validacao = validar(usuario);
    if (!validacao.pass) reject(validacao.erros);
    precadastrar(usuario);
    Usuario.insert(usuario, (err, doc) => {
      if (err) return reject(err);
      return resolve(doc);
    });
  });
}

/** Lista TODOS os usuarios */
export function getAll() {
  return Usuario.getAllData();
}

/** Procura usuarios */
export function findUsers(query) {
  return new Promise((resolve, reject) => {
    Usuario.find(query, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    });
  });
}

/** Deleta usuarios */
export function removeUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) return reject('id não informado');
    Usuario.remove({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    });
  });
}
