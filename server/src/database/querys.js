const queries = {
  getAllCards: 'SELECT * FROM cartas',
  insertCards:
    'INSERT INTO cartas (nombre,apellido,foto,id_rarezas,id_posiciones,id_equipos)VALUES (@nombre,@apellido,@foto,@id_rarezas,@id_posiciones,@id_equipos)',
  getCardById: 'SELECT * FROM cartas WHERE id=@id',
  deleteCardById: 'DELETE FROM cartas WHERE id=@id',
  updateCardById:
    'UPDATE cartas SET nombre=@nombre, apellido=@apellido, foto=@foto, id_rarezas=@id_rarezas, id_posiciones= @id_posiciones,id_equipos=id_equipos WHERE id=@id',
};
module.exports = { queries };
