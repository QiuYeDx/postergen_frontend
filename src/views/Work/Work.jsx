import React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import DisplayContext from "../../components/DisplayContext/DisplayContext";
import {Container} from "./Styled.js";

export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar inputColor={"#fff"}/>
                <Container>
                    <SideBar/>
                    <DisplayContext/>
                </Container>
            </div>
        )
    }
}
