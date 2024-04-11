const { Router } = require("express");
const reservaRoutes = require( "./reserva.routes")
const routes = Router();

routes.use("/reserva",  reservaRoutes);

module.exports = routes;
