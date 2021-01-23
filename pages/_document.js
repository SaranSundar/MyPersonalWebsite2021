import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {

        let showDebugUI = process.env.debug === true ? "debug-screens" : ""

        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                </Head>
                <body className={showDebugUI}>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument