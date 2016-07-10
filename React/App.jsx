import React from 'react';

var ImgDatas=[
    {img:"imgs/1.jpg",h1:'Creative',h2:'DUET'},
    {img:"imgs/2.jpg",h1:'Friendly',h2:'Happy'},
    {img:"imgs/3.jpg",h1:'Tranquilent',h2:'Hussler'},
    {img:"imgs/4.jpg",h1:'Loving',h2:'REBEL'},
    {img:"imgs/5.jpg",h1:'Crazy',h2:'FRIEND'},
    {img:"imgs/6.jpg",h1:'Insecure',h2:'Seek'},
    {img:"imgs/7.jpg",h1:'Lucky',h2:'Frank'}
];
class TemplateMainI extends React.Component{
    render (){
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
    render (){
        var ctrlClassName = 'ctrl-i';
        ctrlClassName += this.props.arrange.isCenter?' ctrl-i_active':'';

        return(
            <a className={ctrlClassName} onClick={this.handleClick}>
                <img src={this.props.data} alt=""/>
            </a>
        )
    }
}
class App extends React.Component{
    constructor(){
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
        imgsCenterArr[0]={isCenter :true};/*把isCenter置为true*/

        for(var i=0; i<imgsArrangeArr.length; i++){
            imgsArrangeArr[i] = {isCenter : false}
        }
        imgsArrangeArr.splice(centerIndex, 0, imgsCenterArr[0]);
        this.setState({
            imgsArrangeArr:imgsArrangeArr
        });

    }
    center (index){
        return ()=>{
            this.rearrange(index).bind(this);
        };
    }
    render(){
        let templateMain=[],templateCtrl=[];
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
