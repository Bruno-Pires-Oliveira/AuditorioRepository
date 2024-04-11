class CallendarControllerServices {
    constructor(CallendarRepository) {
      this.CallendarRepository = CallendarRepository;
    }
    async execute({  today,
        year,
        month,
        cal,
        monthCalendar,
        reserva_id})
     {
      const callendarRegisterDay = await this.CallendarRepository.CallendarController({
        today,
        year,
        month,
        cal,
        monthCalendar,
        reserva_id
      });
      return callendarRegisterDay;
    }
  }
  
  module.exports = CallendarControllerServices;
  