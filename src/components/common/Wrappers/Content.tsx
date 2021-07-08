import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

function Content({ children, ...props }: BoxProps) {
    return (
        <Box w="95%" maxW="1280px" height="100%" m="auto" {...props}>
            {children}
        </Box>
    );
}

export default Content;
