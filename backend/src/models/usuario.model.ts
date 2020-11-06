/**
  Usuario:
  {
       nome: string,
       idade: number,
       email: string,
       bitcows: number, // dinheiro virtual do usuario 
       dataCadastro: Date,
  }
 */

import { Usuario } from '../db';

Usuario.ensureIndex({ fieldName: 'nome', unique: true });
Usuario.ensureIndex({ fieldName: 'email', unique: true });

/** Valida os campos de um usuario */
function validar(u) {
    let erros = [];

    
    // EXEMPLOS DE ERROS:
    if(!u) return {pass: false, erros: ['Usuário não informado']}
    if(!u?.nome) erros.push('nome não informado.');
    if(!u?.idade) erros.push('idade não informada.');
    if(!u?.email) erros.push('email não informado.');

    if (u?.nome && u.nome.length < 2) erros.push('O nome deve ter pelo menos 2 caracteres');
    if (u?.idade && u.idade < 18) erros.push('O usuario deve ter pelo menos 18 anos');
    // etc...

    return erros.length > 0 ? { pass: false, erros }
                             :{ pass: true, erros: [] };
}


/**
 * Pre-cadastra um usuário, adicionando informações
 * preliminares ao objeto. As informações inseridas
 * são:
 * - Data de Cadastro: data Atual
 * - bitcows: 0.0 
 */
function precadastrar(u){
    u.dataCadastro = new Date();
    u.bitCows = 0.0;
    return u;
}


/**
 * Adiciona um novo usuário:
 * - nome: string
 * - idade: number
 * - email: string
 * - bitcows: number (preenchido autom.)
 * - dataCadastro: Date (preenchido autom.)
 */
export function inserir(usuario) {
    return new Promise((resolve, reject) => {
        let validacao = validar(usuario);
        if (!validacao.pass) reject(validacao.erros);
        precadastrar(usuario);
        Usuario.insert(usuario, (err, doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        });
    });
}

/** Lista TODOS os usuarios */
export function getAll(){
    return Usuario.getAllData();
}

