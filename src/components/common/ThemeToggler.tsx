import { Button, useColorMode, useColorModeValue, ButtonProps } from "@chakra-ui/react";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";

interface Props {
    color: ButtonProps["color"];
}

function ThemeToggler({ color = "white" }: Props) {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<FiSun />, <FiMoon />);

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
            {icon}
        </Button>
    );
}

export default ThemeToggler;
