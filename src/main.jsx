import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import { extendTheme } from '@chakra-ui/react'
import { HelmetProvider } from "react-helmet-async";
const theme = extendTheme({
  fonts: {
    heading: `'Fira Mono', sans-serif;`,
    body: `'Fira Mono', sans-serif;`,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
