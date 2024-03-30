export function FormRegisterBuilding() {

  const motivos = ["A Pedido do Cliente"];
  const orgaosEmissores = ["GRAR8", "GRAR", "GRRS"];
  const locais = [
    "Águas Claras",
    "Arniqueira",
    "Brazlândia",
    "Candangolândia",
    "Ceilândia",
    "Cruzeiro",
    "Fercal",
    "Gama",
    "Guará",
    "Itapoã",
    "Jardim Botânico",
    "Lago Norte",
    "Lago Sul",
    "Núcleo Bandeirante",
    "Paranoá",
    "Park Way",
    "Planaltina",
    "Plano Piloto",
    "Recanto das Emas",
    "Riacho Fundo",
    "Riacho Fundo II",
    "Samambaia",
    "Santa Maria",
    "São Sebastião",
    "SCIA",
    "SIA",
    "Sobradinho",
    "Sobradinho II",
    "Sol Nascente/Pôr do Sol",
    "Sudoeste/Octogonal",
    "Taguatinga",
    "Varjão",
    "Vicente Pires"
  ];

  return (
    <section className="w-full py-14 flex justify-center">
      <div className="p-14 w-5/12 bg-white border-2 rounded-2xl">
        <h3 className="font-bold text-4xl">Solicitação de Obra</h3>
        <p className="mb-9">Solicitar Comissionamento de Obra de Incorporação de Redes.</p>
        <form className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="client">Cliente</label>
            <input
              className="p-2 border-2 rounded focus:outline-none focus:border-[--green-medium]"
              type="text"
              name="client"
              id="client"
              placeholder="Ex. Luiz Perez"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="company">Empresa/Obra</label>
            <input
              className="p-2 border-2 rounded focus:outline-none focus:border-[--green-medium]"
              type="text"
              name="company"
              id="company"
              placeholder="Ex. Neoenergia"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="utep">Utep Responsável</label>
            <input
              className="p-2 border-2 rounded focus:outline-none focus:border-[--green-medium]"
              type="text"
              name="utep"
              id="company"
              placeholder="UTEP" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="reason">Motivo</label>
            <select
              className="p-2 border-2 rounded"
              name="reason"
              id="reason"
            >
              {
                motivos && motivos.map((motivo, index) => (
                  <option key={index} value={motivo}>{motivo}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="organ">Órgão Emissor</label>
            <select

              className="p-2 border-2 rounded" name="organ"
              id="organ"
            >
              {
                orgaosEmissores && orgaosEmissores
                  .sort()
                  .map((orgaoEmissor, index) => (
                    <option key={index} value={orgaoEmissor}>{orgaoEmissor}</option>
                  ))
              }
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="local">Local</label>
            <select

              className="p-2 border-2 rounded" name="local"
              id="local"
            >
              {
                locais && locais
                  .sort()
                  .map((local, index) => (
                    <option key={index} value={local}>{local}</option>
                  ))
              }
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="opening-date">Data de Abertura</label>
            <input
              className="p-2 border-2 rounded focus:outline-none focus:border-[--green-medium]"
              type="date"
              name="opening-date"
              id="opening-date"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-3" htmlFor="limit-date">Data Limite</label>
            <input
              className="p-2 border-2 rounded focus:outline-none focus:border-[--green-medium]"
              type="date"
              name="limit-date"
              id="limit-date"
            />
          </div>

          <input
            className="col-span-2 p-2 border-none rounded cursor-pointer font-bold bg-[--green-light] text-white"
            type="button"
            value="Enviar"
          />
        </form>
      </div>
    </section>
  )
}