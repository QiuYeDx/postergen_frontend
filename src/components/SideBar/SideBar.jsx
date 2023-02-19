import React from 'react';
import {Container, H2, H3, UpLoad, PlusWrap, Plus} from "./Styled.js";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedImg = this.handleSelectedImg.bind(this);
    }

    handleSelectedImg(){
        this.refs['img-upload-input'].click();
    }

    submitUpload(){

    }



    render() {
        return (
            <div>
                <Container>
                    <H2 inputTop={"150px"}>Please upload the main product image: </H2>
                    <H3 inputTop={"180px"}>Please upload images in PNG format, please combine multiple<br/>
                        product main images into one image.</H3>
                    <UpLoad onClick={this.handleSelectedImg}>
                        <input
                            ref={"img-upload-input"}
                            className={"img-upload-input"}
                            type={"file"}
                            accept={".png"}
                            onChange={"submitUpload"}
                            style={{visibility: 'hidden'}}
                        />
                        <PlusWrap>
                            <Plus/>
                        </PlusWrap>
                    </UpLoad>
                    <H2 inputTop={"336px"}>Please select a category tab: </H2>

                    <H2 inputTop={"514px"}>Please select a size: </H2>

                    <H2 inputTop={"610px"}>Please enter text: </H2>
                </Container>
            </div>
        )
    }
}
