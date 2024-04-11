const RegistrarReservarService = require("../services/reservaServices/RegistrarReservarService")
const ReservaRepositoryInMemory = require("../repositores/ReservaRepositoryPaste/ReservaRepositoryInMemory")
describe("RegistrarReservarService", () => {
  let reservaRepositoryInMemory = null;
  let registrarReservarService = null;

  it("O registro da reserva deve ser realizado", async () => {
    const reserved = {
        color: "gold",
        title: "PI de Programador de Sistemas",
        description:"Projeto Integrador de PS, visa mostrar o conhecimento adquirido dos alunos, e tambem avaliar o instrutor",
        start:"Terça",
        end :"Terça a tarde",
        callendar_id:"1",
    };
    reservaRepositoryInMemory = new ReservaRepositoryInMemory();
    registrarReservarService = new RegistrarReservarService(reservaRepositoryInMemory);

    const reserveCreate = await registrarReservarService.execute(reserved);

    expect(reserveCreate).toHaveProperty("id");
  });
});
