const RegistrarReservarService = require("../services/reservaServices/RegistrarReservarService");
const ReservaRepository = require("../repositores/ReservaRepositoryPaste/ReservaRepository");
const ListarReservaServices = require("../services/reservaServices/ListarReservaServices");
const UpdateReservaService = require ("../services/reservaServices/UpdateReservaServices")
const reservaCancelServices = require("../services/reservaServices/reservaCancelServices")
const ListReserveById = require ("../services/reservaServices/ListarReservaPorIdServices")
const reservaRepository = new ReservaRepository();
const listReserveByID = new ListReserveById (reservaRepository)
const ReservaCancelServices = new reservaCancelServices(reservaRepository)
const updateReservaService = new UpdateReservaService(reservaRepository)
const registarReservarService = new RegistrarReservarService(reservaRepository);
const listarReservaServices = new ListarReservaServices(reservaRepository);


class ReservaController{
  async registerReserve(req, res) {
    const {title,description,numb_people,color,start,end,cadastre_id} =
      req.body;

    await registarReservarService.execute({
      title,description,numb_people,color,start,end,cadastre_id
    });

    return res.status(201).json("Reserva Cadastrada com sucesso");
  }
  async listReserve(req, res) {
    const reserves = await listarReservaServices.execute();
    return res.status(200).json(reserves);
  }
  async listReserveById(req,res) {
    const {reserva_id} = req.params;

    const reserve = await listReserveByID.execute({reserva_id});

    return res.status(200).json(reserve);
  }
  async updateReserve(req, res) {
    const {reserva_id} = req.params;
    const {title,description,numb_people,color,start,end,cadastre_id } = req.body;

    await updateReservaService.execute({reserva_id,title,description,numb_people,color,start,end,cadastre_id });

    return res.status(200).json("Reserva atualizado com sucesso!");
  }
  async deleteReserve(req, res) {
    const {reserva_id} = req.params;
    const reserve = await ReservaCancelServices.execute({reserva_id});

    return res.status(200).json("Reserva cancelada com sucesso");
  }
}
module.exports = ReservaController;
