import Navbar from './Navbar'
import Footer from './Footer'

import Head from '../node_modules/next/head'

export default function Layout({children}){
    return(
    <>
        <Head>
            <link rel="shortcut icon" href="./images/favicon.ico" />
            <title>T21</title>
        </Head>
        <Navbar />
        <main>{children}</main>
       {/*<Footer />*/}
    </>
    )
}