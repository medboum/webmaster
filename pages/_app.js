import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useRouter } from 'next/router'
import Categories from '../components/categories'
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (
    router.pathname.startsWith('/admin/') ||
    router.pathname.startsWith('/account/')
  ) {
    return (
      <>
        <Provider store={store}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>{' '}
        </Provider>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Provider store={store}>
        <Header />

        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  )
}

export default MyApp
