import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContextStore from '../contexts'
import ProtectRoute from '../components/auth/ProtectRoute'
import LayoutApp from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextStore>
      <ProtectRoute>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </ProtectRoute>
    </ContextStore>
  )

}

export default MyApp
