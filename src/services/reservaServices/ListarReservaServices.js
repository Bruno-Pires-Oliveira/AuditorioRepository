const knex = require("../../database/knex");

class ListarReservaServices {
  constructor(ReservaRepository) {
    this.ReservaRepository = ReservaRepository;
  }
  async execute() {
    const reserves = await this.ReservaRepository.listReserve();
    return reserves;
  }
}
module.exports = ListarReservaServices;
