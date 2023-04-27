import { Snackbar } from '@mui/material'
import type { AppProps } from 'next/app'
import theme from '@/styles/styles'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '@mui/material'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {},
    },
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}
