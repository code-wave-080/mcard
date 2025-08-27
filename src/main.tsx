import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AlertContextProvider } from '@contexts/AlertContext'
import { Global } from '@emotion/react'
import appGlobalStyles from '@styles/globalStyles'

const client = new QueryClient({
    defaultOptions: {
        queries: {
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <App />
                    </Suspense>
                </AlertContextProvider>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
)
