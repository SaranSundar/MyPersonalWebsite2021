import "tailwindcss/tailwind.css";
import Head from "next/head"
import NavBar from "components/NavBar";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Saran Sundar</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <NavBar/>
            <Component {...pageProps} />
        </>)
}

export default MyApp
