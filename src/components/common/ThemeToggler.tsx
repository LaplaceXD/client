import { Button, useColorMode, ButtonProps } from "@chakra-ui/react";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";

interface Props {
    color: ButtonProps["color"];
}

function ThemeToggler({ color = "white" }: Props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button
            borderColor={color}
            color={color}
            onClick={toggleColorMode}
            _hover={{
                bgColor: "primary",
            }}
            _focus={{
                outline: "none",
            }}
            variant="ghost"
        >
            {colorMode === "light" ? <FiSun /> : <FiMoon />}
        </Button>
    );
}

export default ThemeToggler;
