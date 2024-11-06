import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState } from 'react'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  function trocaTema() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
