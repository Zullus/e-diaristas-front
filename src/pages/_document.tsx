import React from "react";
import Document, {
    Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

export default class MyDocument extends Document{

    static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
        
        const sheets = new ServerStyleSheets(),
            originalRendetPage = ctx.renderPage;

        ctx.renderPage = () => originalRendetPage({
            enhanceApp: (App) => 
                (props) => 
                    sheets.collect(<App {...props} />)          
        })

        const initialProps = await Document.getInitialProps(ctx);

        return{
            ...initialProps,
            styles:[
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        }
    }

    render():JSX.Element{

        return <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <body>
                <Main></Main>
                <NextScript></NextScript>
            </body>
        </Html>;

    }

}