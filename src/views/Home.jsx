import React from 'react';
import {Container} from "./Styled.js";
import TopBar from "../components/TopBar/TopBar";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar/>
                <Container>
                    Container~
                </Container>
            </div>
        )
    }
}

