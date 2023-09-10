import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootProvider from './Context/RootProvider'

//create client 
const queryClient  = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <RootProvider>
    <App />
    </RootProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
