import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AlertContextProvider } from '@contexts/AlertContext'
import { Global } from '@emotion/react'
import appGlobalStyles from '@styles/globalStyles'

const client = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Global styles={appGlobalStyles} />
        <RecoilRoot>
            <QueryClientProvider client={client}>
                <AlertContextProvider>
                    <App />
                </AlertContextProvider>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>,
)
