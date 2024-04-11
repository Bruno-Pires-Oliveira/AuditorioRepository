const CallendarRepository = require ("../repositores/CallendarRepository/CallendarRepository")
const callendarRepository = new CallendarRepository()
const CallendarControllerServices = require("../services/CallendarServices/CallendarControllerServices")
const callendarControllerServices = new CallendarControllerServices(callendarRepository)
class CallendarController{
    async CallendarController(req,res){
    const {
     today,
     year,
     month,
     cal,
     monthCalendar,
     reserva_id
    
  
    } = req.body
    await callendarControllerServices.execute({
     today,
     year,
     month,
     cal,
     monthCalendar,
     reserva_id
    
      });
  
      return res.status(201).json("Calendario Criado Com Sucesso ");
}
}
module.exports = CallendarController