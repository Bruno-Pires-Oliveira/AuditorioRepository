const knex = require("../../database/knex");

class UpdateReservaServices {
  constructor(ReservaRepository) {
    this.ReservaRepository = ReservaRepository;
  }
  async execute({reserva_id,title, description, numb_people, color, start, end, cadastre_id}) {
    const reserve = await this.ReservaRepository.updateReserve({
      reserva_id, 
      title,
      description,
      numb_people,
      color,
      start,
      end,
      cadastre_id
    });
    return reserve;
  }
}
module.exports = UpdateReservaServices;
