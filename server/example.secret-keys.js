const pgp = require("pg-promise")({});
const usuario = "";
const senha = "";
const host = "";
const porta = "";
const bancoDeDados = "";
module.exports = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${bancoDeDados}`);

