import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/main'
import theme from '../Components/theme'
import Fonts from '../Components/fonts'
import '../styles/globals.css'


const Website = ({Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website