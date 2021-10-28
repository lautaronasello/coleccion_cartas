const queries = {
  getAllCards: `SELECT (select cartas.id AS [cartas.id],CONCAT(cartas.nombre, ' ', cartas.apellido) as [cartas.nombre], cartas.foto AS [cartas.foto],rarezas.id as [rarezas.id] , rarezas.rareza AS [rarezas.rareza],posiciones.id as [posiciones.id],posiciones.posicion AS [posiciones.posicion],equipos.id as [equipos.id] ,equipos.equipo AS [equipos.equipo],series.id as [series.id],series.serie AS [series.serie] from cartas JOIN rarezas  ON rarezas.id = cartas.id_rarezas JOIN posiciones  ON posiciones.id = cartas.id_posiciones JOIN equipos ON equipos.id = cartas.id_equipos JOIN series ON series.id = cartas.id_series WHERE isDeleted = 0 for json path) as data`,
  insertCards:
    'INSERT INTO cartas (nombre,apellido,foto,id_rarezas,id_posiciones,id_equipos,id_series)VALUES (@nombre,@apellido,@foto,@id_rarezas,@id_posiciones,@id_equipos,@id_series)',
  getCardById: `SELECT (select cartas.id AS [cartas.id],CONCAT(cartas.nombre, ' ', cartas.apellido) as [cartas.nombre], cartas.foto AS [cartas.foto],rarezas.id as [rarezas.id] , rarezas.rareza AS [rarezas.rareza],posiciones.id as [posiciones.id],posiciones.posicion AS [posiciones.posicion],equipos.id as [equipos.id] ,equipos.equipo AS [equipos.equipo],series.id as [series.id],series.serie AS [series.serie] from cartas JOIN rarezas  ON rarezas.id = cartas.id_rarezas JOIN posiciones  ON posiciones.id = cartas.id_posiciones JOIN equipos ON equipos.id = cartas.id_equipos JOIN series ON series.id = cartas.id_series WHERE isDeleted=0 AND cartas.id = @id for json path) as data`,
  deleteCardById: 'UPDATE cartas SET isDeleted=@isDeleted WHERE id=@id',
  updateCardById:
    'UPDATE cartas SET nombre=@nombre, apellido=@apellido, foto=@foto, id_rarezas=@id_rarezas, id_posiciones= @id_posiciones,id_equipos=id_equipos WHERE id=@id',
  getAllUsers:
    'SELECT u.id,u.usuario,u.contraseña,u.email, ru.rol FROM usuarios AS u JOIN rolesUsuario as ru ON ru.id = u.id_rol WHERE isDeleted=0',
  insertUser:
    'INSERT INTO usuarios (usuario,contraseña,email,id_rol)VALUES (@usuario,@contraseña,@email,@id_rol)',
  getUserById: 'SELECT * FROM usuarios WHERE id=@id AND isDeleted=0',
  deleteUserById: 'UPDATE usuarios SET isDeleted=@isDeleted WHERE id=@id',
  updateUserById:
    'UPDATE usuarios SET usuario=@usuario, contraseña=@contraseña, email=@email, id_rol=@id_rol WHERE id=@id',
  getCardsByUser: 'SELECT * FROM cartasUsuario WHERE id_usuarios=@idUser',
  getCardByName: `SELECT (select cartas.id AS [cartas.id],CONCAT(cartas.nombre, ' ', cartas.apellido) as [cartas.nombre], cartas.foto AS [cartas.foto],rarezas.id as [rarezas.id] , rarezas.rareza AS [rarezas.rareza],posiciones.id as [posiciones.id],posiciones.posicion AS [posiciones.posicion],equipos.id as [equipos.id] ,equipos.equipo AS [equipos.equipo],series.id as [series.id],series.serie AS [series.serie] from cartas JOIN rarezas  ON rarezas.id = cartas.id_rarezas JOIN posiciones  ON posiciones.id = cartas.id_posiciones JOIN equipos ON equipos.id = cartas.id_equipos JOIN series ON series.id = cartas.id_series WHERE isDeleted = 0 AND nombre + ' ' + apellido LIKE @name for json path) as data`,
  getPositions: 'SELECT id,posicion FROM posiciones ',
  getRarities: 'SELECT id,rareza FROM rarezas',
  getSeries: 'SELECT id,serie FROM series',
  getTeams: `SELECT id,equipos FROM equipos`,
};
module.exports = { queries };
