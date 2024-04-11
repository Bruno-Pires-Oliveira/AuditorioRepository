const knex = require("../../database/knex");

class reservaCancelServices {
  constructor(ReservaRepository) {
    this.ReservaRepository = ReservaRepository;
  }
  async execute({ reserva_id }) {
  

return await  this.ReservaRepository.deleteReserve({reserva_id})
  
  }
}
module.exports = reservaCancelServices;
