import {
    Box,
    BoxProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends SpaceProps, BackgroundProps, LayoutProps {
    flex?: BoxProps["flex"];
    sx?: BoxProps["sx"];
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
