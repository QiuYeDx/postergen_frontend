import React from 'react';
import {Wrap, Logo, LogoText, Avatar} from "./Styled.js";

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrap>
                <Logo/>
                <LogoText>Smartads</LogoText>
                <Avatar/>
            </Wrap>
        )
    }
}

