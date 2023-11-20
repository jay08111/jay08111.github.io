import { AppProps } from 'next/app'
import '../styles/index.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ 
    subsets: ['latin'] ,  
    weight: ["100", "400", "700", "900"]
  }) 

export default function MyApp({ Component, pageProps }: AppProps) {
  return <main className={montserrat.className}>
     <Component {...pageProps} />
  </main>
}
