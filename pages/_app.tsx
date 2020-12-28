import '../styles/globals.css'
import { Provider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
