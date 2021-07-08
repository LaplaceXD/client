import { Box, BoxProps, SpaceProps } from "@chakra-ui/react";
import React from "react";

interface Props extends SpaceProps {
    flex?: BoxProps["flex"];
    height?: BoxProps["height"];
    children?: React.ReactNode;
}

function Content({ children, ...props }: Props) {
    return (
        <Box w="95%" maxW="1280px" m="auto" {...props}>
            {children}
        </Box>
    );
}

export default Content;
