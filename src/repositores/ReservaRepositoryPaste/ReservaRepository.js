const knex = require("../../database/knex");
class ReservaRepository {
  async registerReserve({title,description,numb_people,color,start,end,cadastre_id}) {
    
    const reserveId = await knex("reservation").insert({
      title,description,numb_people,color,start,end,cadastre_id
    });
    return { id: reserveId };
  }
  async listReserve() {
    const reserves = await knex("reservation");
    return reserves;
  }
  async listReserveById({reserva_id}) {
    const reserve = await knex("reservation").where({id:reserva_id});
    return reserve;
  }

  async updateReserve({reserva_id,title,description,numb_people,color,start,end}) {
    
    const reserve = await knex("reservation").where({id:reserva_id});
    reserve.title = title ?? reserve.title;
    reserve.description = description ?? reserve.description;
    reserve.numb_people = numb_people ?? reserve.numb_people;
    reserve.color = color ?? reserve.color;
    reserve.start = start ?? reserve.start;
    reserve.end = end ?? reserve.end
    

    await knex("reservation").where({id:reserva_id}).update({
      title: reserve.title,
      description: reserve.description,
      numb_people: reserve.numb_people,
      color: reserve.color,
      start: reserve.start,
      end: reserve.end
    });
    return reserve;
  }

  async deleteReserve({reserva_id}) {
    const reserve = await knex("reservation").where({id:reserva_id}).delete();
    return reserve;
  }
}

module.exports = ReservaRepository;
