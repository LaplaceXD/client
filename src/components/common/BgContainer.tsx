import {
    Box,
    useColorModeValue,
    BackgroundProps,
    LayoutProps,
    FlexProps,
    ChakraProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    bgColor?: BackgroundProps["bgColor"];
    height?: LayoutProps["height"];
    flex?: FlexProps["flex"];
    sx?: ChakraProps["sx"];
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
