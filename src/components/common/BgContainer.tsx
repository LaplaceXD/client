import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    bgColor?: string;
    height?: string;
    flex?: string;
    children?: ReactNode;
}

function BgContainer({ children, bgColor, ...props }: Props) {
    const defaultColor = useColorModeValue("light.200", "dark.200");

    return (
        <Box w="100%" bgColor={bgColor || defaultColor} {...props}>
            {children}
        </Box>
    );
}

export default BgContainer;
