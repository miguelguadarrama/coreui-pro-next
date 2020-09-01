import { useReducer } from 'react'
import AppContext from '../context/app'
import reducer from '../context/reducer'
import TheLayout from '../components/containers/TheLayout'
import '../styles/scss/style.scss';

const App = ({ Component, pageProps }) => {

  const [state, dispatch] = useReducer(reducer)

  return (
    <AppContext value={{ state, dispatch }}>
      <TheLayout>
        <Component {...pageProps} />
      </TheLayout>
    </AppContext>
  )
}

export default App
