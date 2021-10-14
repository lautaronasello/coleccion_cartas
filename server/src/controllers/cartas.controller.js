const sql = require('mssql');
const { queries, getConnection } = require('../database');

const getCards = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllCards);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postCards = async (req, res) => {
  const { nombre, apellido, foto, id_rarezas, id_posiciones, id_equipos } =
    req.body;

  if (
    nombre == null ||
    apellido == null ||
    foto == null ||
    id_rarezas == null ||
    id_posiciones == null ||
    id_equipos == null
  ) {
    return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('nombre', sql.NVarChar, nombre)
      .input('apellido', sql.NVarChar, apellido)
      .input('foto', sql.NVarChar, foto)
      .input('id_rarezas', sql.Int, id_rarezas)
      .input('id_posiciones', sql.Int, id_posiciones)
      .input('id_equipos', sql.Int, id_equipos)
      .query(queries.insertCards);

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCardById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', id)
    .query(queries.getCardById);

  if (result.recordset.length === 0) {
    return res
      .status(400)
      .send('Bad request. The card is not in the colection.');
  }
  res.status(200).send(result.recordset[0]);
};

const deleteCardById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', id)
    .query(queries.deleteCardById);

  if (result.rowsAffected[0] === 0) {
    return res
      .status(400)
      .send('Bad request. The card is not in the colection.');
  }

  res.status(200).send('Deleted card');
};

const updateCardById = async (req, res) => {
  const { nombre, apellido, foto, id_rarezas, id_posiciones, id_equipos } =
    req.body;
  const { id } = req.params;
  if (
    nombre == null ||
    apellido == null ||
    foto == null ||
    id_rarezas == null ||
    id_posiciones == null ||
    id_equipos == null
  ) {
    return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
  }

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('nombre', sql.VarChar, nombre)
    .input('apellido', sql.VarChar, apellido)
    .input('foto', sql.VarChar, foto)
    .input('id_rarezas', sql.Int, id_rarezas)
    .input('id_posiciones', sql.Int, id_posiciones)
    .input('id_equipos', sql.Int, id_equipos)
    .input('id', sql.Int, id)
    .query(queries.updateCardById);

  res.json(result);
};

module.exports = {
  getCards,
  postCards,
  getCardById,
  deleteCardById,
  updateCardById,
};
