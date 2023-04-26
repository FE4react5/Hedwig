
import theme from '@/styles/styles'
import { ThemeProvider } from '@mui/material'

import Head from 'next/head'

export default function Home() {
   
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>HedWig</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            </main>
        </ThemeProvider>
    )
}
