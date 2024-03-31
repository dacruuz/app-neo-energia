import db from '../../db.json';

export function OrdersTable() {

  const titles = [
    "Cliente",
    "Protocolo",
    "Empresa/Obra",
    "UTEP",
    "Motivo",
    "Situação",
    "Órgão Executor",
    "Local",
    "Data Abertura",
    "Data Limite",
    "Data Conclusão"
  ]

  return (
    <section className='w-full'>
      <table className='w-full border text-sm'>
        <thead>
          {
            titles && titles.map((title, index) => (
              <>
                <th className='border p-1' key={index}>{title.toUpperCase()}</th>
              </>
            ))
          }
        </thead>

        <tbody>
          {
            db && db.map((item) => (
              <tr className='odd:bg-slate-200'>
                <td className='border p-1'>{item.cliente}</td>
                <td className='border p-1'>{item.protocolo}</td>
                <td className='border p-1'>{item['empresa/obra']}</td>
                <td className='border p-1'>{item.utep}</td>
                <td className='border p-1'>{item.motivo}</td>
                <td className='border p-1'>{item.situacao}</td>
                <td className='border p-1'>{item['orgao-executor']}</td>
                <td className='border p-1'>{item.local}</td>
                <td className='border p-1'>{item['data-abertura']}</td>
                <td className='border p-1'>{item['data-limite']}</td>
                <td className='border p-1'>{item['data-conclusao']}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}