import React from "react";
import * as C from './style'
import SideBarHeader from "../sideBarHeader/index";
import SideBarChats from "../sideBarChats/index";

const SideBar = ({ setUserChat, userChat}) => {
    return (
        <C.Container>
            <SideBarHeader setUserChat={setUserChat} />
            <SideBarChats setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    )
}

export default SideBar