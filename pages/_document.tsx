import { ColorModeScript } from "@chakra-ui/color-mode";
import { theme } from "../src/chakraUI";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta charSet="UTF-8" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
