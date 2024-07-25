import React from "react";
import ChatHeader from "../chatHeader";
import * as C from './style'
import ChatBody from "../chatBody";
import ChatFooter from "../chatFooter";
import Default from "../Default";

const Chat = ({userChat}) => {

    if (!userChat) return <Default />

    return (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    )
}

export default Chat