import React from 'react';
import {
    Container, H2, H3, UpLoad, PlusWrap, Plus, UpLoadedImg,
    SelectButton, FuncWrapA, FuncWrapB, MainButton, Circle, Sub,
    PlusWhite, BoxWrap, BoxWrapper, Wrapper, Box, SubCircle, SubWrap,
    SelectInput, SelectOption, GapErect, InputText
} from "./Styled.js";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        // this.img = 'data:image/png;base64,';
        // this.state = {imgUrl: '', indexOfItems: [1, 2, 3, 4, 5]};
        this.state = {
            imgUrl: '',
            itemsValue: ['Please enter text here...', 'Please enter text here...',
                'Please enter text here...', 'Please enter text here...',
                'Please enter text here...'],
        };
        this.btnRef = React.createRef();
        this.handleSelectedImg = this.handleSelectedImg.bind(this);
        this.submitUpload = this.submitUpload.bind(this);
        this.addItemOfInput = this.addItemOfInput.bind(this);
        this.deleteItemOfInput = this.deleteItemOfInput.bind(this);
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

    // Button list
    nameOfButtonA = ['Accessories & Bags', 'Appliances', 'Beauty & Toiletries',
        'Food & Fresh', 'Clothing & Shoes', 'Digital', 'Activity', 'Others'];
    listItemsOfButtonA = this.nameOfButtonA.map((name) =>
        <SelectButton>{name}</SelectButton>
    );
    nameOfButtonB = ['2160 * 1214', '1214 * 2160'];
    listItemsOfButtonB = this.nameOfButtonB.map((name) =>
        <SelectButton>{name}</SelectButton>
    );
    nameOfInput = ['[mainhead]', '[subhead]', '[buttor]',
        '[others]', '[logo]', '[house]', '[sofa]'];
    listItemOfInputOption = this.nameOfInput.map((name) =>
        <SelectOption>{name}</SelectOption>
    );
    // itemsValue = ['Please enter text here...', 'Please enter text here...',
    //     'Please enter text here...', 'Please enter text here...',
    //     'Please enter text here...'];
    // listItemOfInput = this.itemsValue.map((value) =>
    //     <BoxWrap>
    //         <Box>
    //             <SelectInput>
    //                 {this.listItemOfInputOption}
    //             </SelectInput>
    //             <InputText placeholder={value}/>
    //         </Box>
    //         <GapErect/>
    //         <SubCircle>
    //             <SubWrap>
    //                 <Sub/>
    //             </SubWrap>
    //         </SubCircle>
    //     </BoxWrap>
    // );
    dex = 0;
    addItemOfInput(){
        // this.state.indexOfItems.push(8);
        // console.log(this.state.indexOfItems);
        // this.state.itemsValue.push('Please enter text here...');
        // this.itemsValue.push('Please enter text here...');
        // console.log(this.itemsValue);
        const tmp = this.state.itemsValue;
        tmp.push('Please enter text here...');
        this.setState({itemsValue: tmp});
        // this.setState((state) => ({
        //     itemsValue: this.itemsValue,
        // }));
        // this.listItemOfInput = this.state.itemsValue.map((value) =>
        //     <BoxWrap>
        //         <Box>
        //             <SelectInput>
        //                 {this.listItemOfInputOption}
        //             </SelectInput>
        //             <InputText placeholder={value}/>
        //         </Box>
        //         <GapErect/>
        //         <SubCircle>
        //             <SubWrap>
        //                 <Sub/>
        //             </SubWrap>
        //         </SubCircle>
        //     </BoxWrap>
        // );
    }

    deleteItemOfInput(e){
        const index = e.target.getAttribute('data-index');
        const lists = this.state.itemsValue;
        lists.splice(index, 1);
        this.setState({itemsValue: lists});
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
                        // src={this.state.imgUrl || './logo.svg'}
                        src={this.state.imgUrl}
                    />

                    <H2 inputTop={"336px"}>Please select a category tab: </H2>
                    <FuncWrapA>
                        {this.listItemsOfButtonA}
                    </FuncWrapA>

                    <H2 inputTop={"514px"}>Please select a size: </H2>
                    <FuncWrapB>
                        {this.listItemsOfButtonB}
                    </FuncWrapB>

                    <H2 inputTop={"600px"}>Please enter text: </H2>
                    <Circle left={'400px'} top={'596px'} onClick={this.addItemOfInput}>
                        <PlusWrap>
                            <PlusWhite/>
                        </PlusWrap>
                    </Circle>
                    <Wrapper>
                        <BoxWrapper>
                            {/*{this.listItemOfInput}*/}
                            {this.state.itemsValue.map((value, index) =>
                                <BoxWrap>
                                    <Box>
                                        <SelectInput>
                                            {this.listItemOfInputOption}
                                        </SelectInput>
                                        <InputText placeholder={value}/>
                                    </Box>
                                    <GapErect/>
                                    <SubCircle>
                                        <SubWrap key={this.dex+index} index={index} onClick={this.deleteItemOfInput}>
                                            <Sub/>
                                        </SubWrap>
                                    </SubCircle>
                                </BoxWrap>
                            )}
                        </BoxWrapper>
                    </Wrapper>
                    <MainButton>Generate !</MainButton>
                </Container>
            </div>
        )
    }
}
