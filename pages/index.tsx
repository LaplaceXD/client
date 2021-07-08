import { MouseEvent, useState, useEffect } from "react";
import { Button, Text, Flex, Input, useColorModeValue } from "@chakra-ui/react";
import { io, Socket } from "socket.io-client";
import type { Message } from "../src/types/message";

import MessageDisplay from "../src/components/MessageDisplay";
import { BgContainer, Content } from "../src/components/common/Wrappers";
import ThemeToggler from "./../src/components/common/ThemeToggler";

// TODO: Fix the scrolling issues of the messageDisplay, you should not rely on position: fixed
// TODO: Refactor Time
function Home() {
    const [socket, setSocket] = useState<Socket>();
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<Message>>([]);

    const neutralColor = useColorModeValue("light.200", "dark.200");
    const inverseNeutral = useColorModeValue("dark.200", "light.200");
    const lighterNeutral = useColorModeValue("light.100", "dark.100");

    useEffect(() => {
        const name = prompt("Do you have a name?");
        setUser(name || "Jonh");

        const socket = io("https://hoothoot-server.herokuapp.com/");
        setSocket(socket);
    }, []);

    function handleSubmit(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (!socket) return;

        socket.emit("send-message", { message, name: user });
        setMessage("");

        socket.once("receive-message", (data) => {
            setMessages((v) => [...v, data]);
        });
    }

    return (
        <Flex flexDir="column" w="100%" h="100vh" bgColor={neutralColor}>
            <BgContainer position="fixed">
                <Content display="flex" py="8px" justifyContent="space-between" alignItems="center">
                    <Text color="primary" fontSize="3xl" fontWeight="extrabold" textTransform="uppercase">
                        HootHoot
                    </Text>
                    <ThemeToggler color={inverseNeutral} />
                </Content>
            </BgContainer>

            <BgContainer bgColor={lighterNeutral} flex="1">
                <Content>
                    <MessageDisplay
                        height="100%"
                        pb="64px"
                        spacing="2px"
                        messages={messages}
                        user={user}
                        colors={{
                            container: lighterNeutral,
                            senderMessage: neutralColor,
                            senderText: inverseNeutral,
                        }}
                    />
                </Content>
            </BgContainer>

            <BgContainer position="fixed" bottom={0}>
                <Content py="8px" sx={{ form: { display: "flex" } }}>
                    <form action="">
                        <Input
                            color={inverseNeutral}
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)}
                            mr="8px"
                        />
                        <Button type="submit" color="dark.200" bgColor="primary" onClick={handleSubmit}>
                            Send
                        </Button>
                    </form>
                </Content>
            </BgContainer>
        </Flex>
    );
}

export default Home;
