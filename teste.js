const Hospede = require('./classes/Hospede');
const Endereco = require('./classes/Endereco');
const CheckInOut = require('./classes/CheckInOut');
const Documento = require('./classes/Documento');
const DateConverter = require('./Utils/DateConverter');
const Defaults = require('./Utils/Defaults');
const DateFormat = require('fast-date-format');



// let check = new CheckInOut('27/03/1984','31/12/18');
// let documento = new Documento('CPF', '72571039253');
// let endereco = new Endereco('Rua Braz Bernardino 223  Centro, Viçosã çanõñ, MG 36.010-320');
let endereco = new Endereco();
// let hospede = new Hospede(check, 'Thiago Moreira Bianeck','27/03/1984','Brasileiro', documento, 'Programador', 'thiagobianeck@gmail.com', endereco);
// let hospede = new Hospede(check, 'Thiago Moreira Bianeck',null,'Brasileiro', documento, 'Programador', 'thiagobianeck@gmail.com', endereco);

console.log(endereco);
// console.log(hospede.dataNascimento);



