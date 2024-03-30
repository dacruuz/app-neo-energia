export function Footer() {

  const links = {
    quemSomosLinks: [
      { id: 1, nome: "Sobre Nós", link: "#" },
      { id: 2, nome: "Geração", link: "#" },
      { id: 3, nome: "Transmissão", link: "#" },
      { id: 4, nome: "Distribuição", link: "#" },
      { id: 5, nome: "Comercialização", link: "#" },
      { id: 6, nome: "Governança Corporativa", link: "#" },
    ],
    sustentabilidadeLinks: [
      { id: 1, nome: "Modelo Sustentável", link: "#" },
      { id: 2, nome: "Meio Ambiente", link: "#" },
      { id: 3, nome: "Transição Energética", link: "#" },
      { id: 4, nome: "Mudanças climáticas", link: "#" },
      { id: 5, nome: "Renováveis", link: "#" },
    ],
    compromissoSocialLinks: [
      { id: 1, nome: "Escola de Eletricistas", link: "#" },
      { id: 2, nome: "Ações Socioambientais", link: "#" },
      { id: 3, nome: "Esporte", link: "#" },
      { id: 4, nome: "Música", link: "#" },
      { id: 5, nome: "Segurança", link: "#" },
      { id: 6, nome: "Eficiência Energética", link: "#" },
      { id: 7, nome: "Campanhas e Promoções", link: "#" },
      { id: 8, nome: "Programa de Voluntariado", link: "#" },
      { id: 9, nome: "Instituto Neoenergia", link: "#" },
    ],
    inovacaoLinks: [
      { id: 1, nome: "Inovação em Energia", link: "#" },
      { id: 2, nome: "Governança da Inovação", link: "#" },
      { id: 3, nome: "Cultura de Inovação", link: "#" },
      { id: 4, nome: "Inovação Aberta", link: "#" },
      { id: 5, nome: "Pesquisa, Desenvolvimento e Inovação", link: "#" },
    ],
    talentosLinks: [
      { id: 1, nome: "Trabalhe Conosco", link: "#" },
      { id: 2, nome: "Programa de Estágio", link: "#" },
      { id: 3, nome: "Programa Trainee", link: "#" },
      { id: 4, nome: "Diversidade e Inclusão Social", link: "#" },
      { id: 5, nome: "Nossas Histórias", link: "#" },
    ],
    salaDeComunicacaoLinks: [
      { id: 1, nome: "Imprensa", link: "#" },
      { id: 2, nome: "Blog", link: "#" },
      { id: 3, nome: "Artigos", link: "#" },
      { id: 4, nome: "Entrevistas", link: "#" },
      { id: 5, nome: "Multimídia", link: "#" },
    ],
    faleConoscoLinks: [
      { id: 1, nome: "Atendimento ao Cliente", link: "#" },
      { id: 2, nome: "Fornecedores", link: "#" },
      { id: 3, nome: "Dúvidas Frequentes", link: "#" },
      { id: 4, nome: "Segurança Cibernética", link: "#" },
      { id: 5, nome: "Canal de Denúncia", link: "#" },
    ]
  }

  return (
    <footer className="text-white text-sm">
      <section className="bg-[--green-medium] p-32 flex flex-wrap gap-8">
      <div>
        <h4 className="font-bold mb-5">Quem somos</h4>
        { links.quemSomosLinks.map((quemSomos) => (
          <ul className="pl-4">
            <li key={quemSomos.id}>
              <a href={quemSomos.link}>{quemSomos.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Sustentabilidade</h4>
        { links.sustentabilidadeLinks.map((sustentabilidade) => (
          <ul className="pl-4">
            <li key={sustentabilidade.id}>
              <a href={sustentabilidade.link}>{sustentabilidade.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Compromisso Social</h4>
        { links.compromissoSocialLinks.map((compromissoSocial) => (
          <ul className="pl-4">
            <li key={compromissoSocial.id}>
              <a href={compromissoSocial.link}>{compromissoSocial.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Inovação</h4>
        { links.inovacaoLinks.map((inovacao) => (
          <ul className="pl-4">
            <li key={inovacao.id}>
              <a href={inovacao.link}>{inovacao.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Talentos</h4>
        { links.talentosLinks.map((talentos) => (
          <ul className="pl-4">
            <li key={talentos.id}>
              <a href={talentos.link}>{talentos.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Sala de Comunicação</h4>
        { links.salaDeComunicacaoLinks.map((salaDeComunicacao) => (
          <ul className="pl-4">
            <li key={salaDeComunicacao.id}>
              <a href={salaDeComunicacao.link}>{salaDeComunicacao.nome}</a>
            </li>
          </ul>
        )) }
      </div>

      <div>
        <h4 className="font-bold mb-5">Fale Conosco</h4>
        { links.faleConoscoLinks.map((faleConosco) => (
          <ul className="pl-4">
            <li key={faleConosco.id}>
              <a href={faleConosco.link}>{faleConosco.nome}</a>
            </li>
          </ul>
        )) }
      </div>
      </section>
      <section className="bg-[--green-light] p-5 flex justify-center">
        <span>© 2024 Neoenergia. Todos os direitos reservados</span>
      </section>
    </footer>
  )
}