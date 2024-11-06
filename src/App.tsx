import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
          <section>projetos</section>
        </main>
      </Container>
    </>
  )
}

export default App
