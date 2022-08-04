import Nav from './Nav'
import Footer from './Footer'

import Head from '../node_modules/next/head'
import Backgroud from './Backgroud'

export default function Layout({children}){
    return(
    <>
        <Head>
            <link rel="shortcut icon" href="./images/favicon.ico" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <title>T21</title>
        </Head>
        <Nav />
        <div className='flex h-full justify-center items-center mt-20'>
            <img src="/images/sd_t21.jpg" width="90%" height="90%" className="rounded-tr-extraLarge rounded-bl-extraLarge  px-4"/>
        </div>
            <main>{children}</main>
       <Footer />
    </>
    )
}