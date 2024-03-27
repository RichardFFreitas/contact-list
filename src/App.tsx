import { Provider } from 'react-redux'
import ListaDeContatos from './containers/ListaDeContatos'
import StyleGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal>
      <Container>
      <ListaDeContatos />
      </Container>
    </StyleGlobal>
    </Provider>
  )
}

export default App
