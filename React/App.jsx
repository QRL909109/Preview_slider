import React from 'react';
//获取图片相关信息
var ImgDatas = require('./data/imgDatas.json');

//将图片名信息转成图片URL路径信息
ImgDatas = (function getImgURL(imageDatasArr){
    for(var i=0,j=imageDatasArr.length; i<j; i++){
       var singleImageData = imageDatasArr[i];
        singleImageData.img = './imgs/'+singleImageData.img;
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(ImgDatas);

class TemplateMainI extends React.Component{
    render () {
        var mainClassName = this.props.right?'main-i main-i_right':'main-i';
        mainClassName += this.props.arrange.isCenter?' main-i_active':'';

        return(
            <div className={mainClassName}>
                <div className="caption">
                    <h2>{this.props.data.h1}</h2>
                    <h3>{this.props.data.h2}</h3>
                </div>
                <img src={this.props.data.img} alt=""/>
            </div>
        )
    }
}
class TemplateCtrlI extends React.Component{
    handleClick (e){
        e.preventDefault();
        this.props.center();
    }
    render() {
        var ctrlClassName = 'ctrl-i';
        ctrlClassName += this.props.arrange.isCenter?' ctrl-i_active':'';

        return(
            <a className={ctrlClassName} onClick={this.handleClick.bind(this)}>
                <img src={this.props.data} alt=""/>
            </a>
        )
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            imgsArrangeArr : []
        };
    }

    componentDidMount(){
        this.rearrange(0);
    }

    rearrange(centerIndex){
        var imgsArrangeArr = this.state.imgsArrangeArr,
            imgsCenterArr = imgsArrangeArr.splice(centerIndex , 1); /*取出那组对应的数组*/

        for(var i=0; i<imgsArrangeArr.length; i++){ /*清空所有中心图片*/
            imgsArrangeArr[i] = {isCenter : false}
        }

        imgsCenterArr[0]={isCenter :true};/*把isCenter置为true*/

        imgsArrangeArr.splice(centerIndex, 0, imgsCenterArr[0]); /*将centerIndex的isCenter变成true*/
        this.setState({
            imgsArrangeArr:imgsArrangeArr
        });

    }
    center (index){
        return ()=>{
            this.rearrange(index);
        };
    }
    render() {
        let templateMain=[],templateCtrl=[];
        ImgDatas.forEach((value , index)=>{
            if (!this.state.imgsArrangeArr[index]) { /*将所有imgsArrangeArr的isCenter 置为false*/
                this.state.imgsArrangeArr[index] = {
                    isCenter  : false
                };
            }

            templateMain.push(
                <TemplateMainI
                    key={index}
                    data={value}
                    center={this.center(index)}
                    arrange={this.state.imgsArrangeArr[index]}
                    right={index % 2? true : false} /*设置一个向左向右的转态*/
                />
            );
            templateCtrl.push(
                <TemplateCtrlI
                    key={index}
                    data={value.img}
                    center={this.center(index)}
                    arrange={this.state.imgsArrangeArr[index]}
                />
            );
        });
        return(
            <div className="slider">
                <div className="main">
                    {templateMain}
                </div>
                <div className="ctrl">
                    {templateCtrl}
                </div>
            </div>
        );
    }
}

export default App;
