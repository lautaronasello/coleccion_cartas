const sql = require('mssql');
const { queries, getConnection } = require('../database');

const getCards = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllCards);
    res.json(JSON.parse(result.recordset[0].data));
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postCards = async (req, res) => {
  const {
    nombre,
    apellido,
    foto,
    id_rarezas,
    id_posiciones,
    id_equipos,
    id_series,
  } = req.body;

  if (
    nombre == null ||
    apellido == null ||
    foto == null ||
    id_rarezas == null ||
    id_posiciones == null ||
    id_series == null ||
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
      .input('id_series', sql.Int, id_series)
      .query(queries.insertCards);

    res.status(200).json('Success. Card created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCardById = async (req, res) => {
  const { id } = req.params;
  const isDeleted = 1;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', id)
    .input('isDeleted', sql.Bit, isDeleted)
    .query(queries.deleteCardById);

  if (result.rowsAffected[0] === 0) {
    return res.status(400).send('Forbidden. The card is not in the colection.');
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
    return res.status(400).json({ msg: 'Forbidden. Please fill all fields' });
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

  res.status(200).json('Card edit successfully');
};

const getCardByIdNumber = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', id)
    .query(queries.getCardById);

  if (result.recordset.length === 0) {
    return res.status(400).send('Forbbiden. The card is not in the colection.');
  }
  res.status(200).json(JSON.parse(result.recordset[0].data));
};

const getCardByName = async (req, res) => {
  const { name } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('name', sql.VarChar, `%${name}%`)
    .query(queries.getCardByName);

  res.status(200).json(JSON.parse(result.recordset[0].data));
};

const getAllTeams = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTeams);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getSeries = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getSeries);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPositions = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getPositions);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getRarities = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getRarities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getCards,
  postCards,
  getCardByIdNumber,
  deleteCardById,
  updateCardById,
  getCardByName,
  getAllTeams,
  getPositions,
  getRarities,
  getSeries,
};
