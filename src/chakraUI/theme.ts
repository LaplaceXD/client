import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import breakpoints from "./breakpoints";

export default extendTheme({
    colors: {
        dark: {
            100: "#2b303a",
            200: "#1e2229",
        },
        light: {
            100: "#e8e8e8",
            200: "#f5f5f5",
        },
        primary: "#92dce5",
        secondary: "#d64933",
    },
    ...config,
    ...breakpoints,
});
