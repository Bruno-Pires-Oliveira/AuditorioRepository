class RegistrarReservarService {
  constructor(ReserveRepository) {
    this.ReserveRepository = ReserveRepository;
  }
  async execute({reserva_id,title,description,numb_people,color,start,end,cadastre_id})
   {
    const reserveRegistrade = await this.ReserveRepository.registerReserve({
      reserva_id,
      title,
      description,
      numb_people,
      color,
      start,
      end,
      cadastre_id
    });
    return reserveRegistrade;
  }
}

module.exports = RegistrarReservarService;
