const knex = require("../../database/knex");

class ListarReservaPorIdServices {
  constructor(ReservaRepository) {
    this.ReservaRepository = ReservaRepository;
  }
  async execute({ reserva_id }) {
    const reserve = await this.ReservaRepository.listReserveById({ reserva_id });
    return reserve;
  }
}
module.exports = ListarReservaPorIdServices;
