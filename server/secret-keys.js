const pgp = require("pg-promise")({});
const usuario = "postgres";
const senha = "230205";
const host = "localhost";
const porta = "5432";
const bancoDeDados = "uffs";
module.exports = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${bancoDeDados}`);

