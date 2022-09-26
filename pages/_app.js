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
        <Header />
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  )
}

export default MyApp
