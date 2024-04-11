class ReservaRepositoryInMemory {
  reservas = [];

  async registerReserve({
    color,
    title,
    description,
    start,
    end,
    callendar_id,
  }) {
    const register = {
      color,
      title,
      description,
      start,
      end,
      callendar_id,
    };
    this.register.push(reservas);
    return reservas;
  }
  async listReserve({}) {
    return this.reservas;
  }
  async listReserveById({id}){
    const reserve = this.reservas.find(reserve => reserve.id === id)     
    return reserve
  }
  async updateReserve({id, color, title, description, start, end}){
    
    const update = this.listReserveById({id})
    update.color = color ?? update.color
    update.title = title ?? update.title
    update.description = description ?? update.description
    update.start = start ?? update.start
    update.end = end ?? update.end
  }
}

module.exports = ReservaRepositoryInMemory;
