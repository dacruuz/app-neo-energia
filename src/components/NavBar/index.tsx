import logo from '../../assets/neo-energia-logo.png'

export function NavBar() {
  return (
    <header className="px-32 py-4 flex justify-between items-center">
      <div>
        <img className='h-14' src={logo} alt="Logo Neo Energia" />
      </div>
      <div className="flex gap-4">
        <a className="text-sm font-bold">Órdens Concluídas</a>
        <a className="text-sm font-bold">Órdens Pendentes</a>
      </div>
    </header>
  )
}