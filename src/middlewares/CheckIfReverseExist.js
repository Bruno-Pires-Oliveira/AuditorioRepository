const knex = require("../database/knex");

async function CheckIfReserveExist(req, res, next) {
  const {reserva_id} = req.params;
  const reserve = await knex("reservation").where({id:reserva_id});
  if (reserve.length === 0) {
    return res.status(400).json("Reserva não encontrada");
  }
  next();
}
module.exports = CheckIfReserveExist;
