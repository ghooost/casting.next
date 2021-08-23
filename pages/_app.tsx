import { store } from '@store/index'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default App