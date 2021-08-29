import '../styles/global.css'

import { store } from '@store/index'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default App