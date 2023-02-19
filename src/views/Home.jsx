import React from 'react';
import {Container, H1, MainButton, Gap, Text, Shape, ShapeWrap, Wrap} from "./Styled.js";
import TopBar from "../components/TopBar/TopBar";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.gotoWork = this.gotoWork.bind(this);
    }

    gotoWork(){
        window.location.href="#/work";
    }

    render() {
        return (
            <div>
                <TopBar/>
                <Container>
                    <Wrap>
                        <H1>Simply create<br/>
                            your own AD！</H1>
                        <Gap/>
                        <Text>Please upload your main product image and text, wait for a while, <br/>
                            you will get the advertising poster you need！<br/>
                            We will also recommend the relevant color scheme and<br/>
                            available decoration materials！</Text>
                        <MainButton onClick={this.gotoWork}>Get Started !</MainButton>
                    </Wrap>
                    <ShapeWrap><Shape/></ShapeWrap>
                </Container>
            </div>
        )
    }
}

