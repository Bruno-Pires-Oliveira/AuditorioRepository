const knex = require("../../database/knex");

class CallendarRepository{
    async registerReserve({today,year,month,cal,monthCalendar,reserva_id}) {
    
        const callendarId = await knex("reservation").insert({
            today,
            year,
            month,
            cal,
            monthCalendar,
            reserva_id
        });
        return { id: callendarId };
      }
}
module.exports = CallendarRepository