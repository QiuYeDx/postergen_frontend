import React from 'react';
import {Container, H2, H3, UpLoad, PlusWrap, Plus, UpLoadedImg} from "./Styled.js";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        // this.img = 'data:image/png;base64,';
        this.state = {imgUrl: ''};
        this.btnRef = React.createRef();
        this.handleSelectedImg = this.handleSelectedImg.bind(this);
        this.submitUpload = this.submitUpload.bind(this);
    }

    handleSelectedImg(){
        this.btnRef.current.click();
    }

    submitUpload(e){
        const imgs = e.target.files;
        const rawImg = imgs[0];
        if(!rawImg) return;
        this.setState({imgUrl: URL.createObjectURL(rawImg)});
        // const url = URL.createObjectURL(rawImg);
        // this.img = url.slice(url.indexOf(':') + 1);
        // const blob = new Blob([rawImg]);
        // this.img = this.img + blob;
        // console.log(this.img);
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
                            ref={this.btnRef}
                            className={"img-upload-input"}
                            type={"file"}
                            accept={".png"}
                            onChange={this.submitUpload}
                            style={{visibility: 'hidden'}}
                        />
                        <PlusWrap>
                            <Plus/>
                        </PlusWrap>
                    </UpLoad>
                    <UpLoadedImg
                        // id={"img-uploaded"}
                        // src={this.img || './logo.svg'}
                        src={this.state.imgUrl}
                    />
                    <H2 inputTop={"336px"}>Please select a category tab: </H2>

                    <H2 inputTop={"514px"}>Please select a size: </H2>

                    <H2 inputTop={"610px"}>Please enter text: </H2>
                </Container>
            </div>
        )
    }
}
