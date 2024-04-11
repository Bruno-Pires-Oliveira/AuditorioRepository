const { Router } = require("express");
const ReservaController = require("../Controller/ReservaController");
const reservaController = new ReservaController();
const reservaRoutes = Router();
const CheckIfReserveExist = require("../middlewares/CheckIfReverseExist")

reservaRoutes.post("/", reservaController.registerReserve);
reservaRoutes.get("/", reservaController.listReserve);
reservaRoutes.get("/:reserva_id", CheckIfReserveExist,reservaController.listReserveById)
reservaRoutes.patch("/:reserva_id",CheckIfReserveExist ,reservaController.updateReserve);
reservaRoutes.delete("/:reserva_id", CheckIfReserveExist,reservaController.deleteReserve);

module.exports = reservaRoutes;
