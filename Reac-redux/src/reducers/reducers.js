/**
 * Created by Administrator on 2016/8/24 0024.
 */
import {combineReducers} from 'redux'
import { Set_Center_Filter } from '../actions/index'

/*
* 需要npm install json-loader
* 识别路径中的JSON对象
* */
var ImgDatas = require('../../static/data/imgDatas.json');

/* @type (function(){})()  立即执行函数
 * @param imageDatasArr Json对象
 * @return new JSON
 * @功能 1.将图片名信息转成图片URL路径信息
 *      2.为第一个数组元素设置isCenter
 *      3.根据 奇偶 添加right属性
 * */
ImgDatas = (function getImgURL(imageDatasArr){
    imageDatasArr[0].isCenter = "true";
    for(var i=0,j=imageDatasArr.length;  i<j;  i++){
        var singleImageData = imageDatasArr[i];
        singleImageData.right = i % 2 ? 'true':'false';
        singleImageData.img = '../static/imgs/'+singleImageData.img;
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(ImgDatas);

/*
 * @param state 数组
 * @return new Array
 * @功能 改变传进来的数组 isCenter="false"
 * */
function reMapArr(state){
    var rearr=[];
    state.map((item)=>{
        item.isCenter = "false"
        rearr.push(item);
    })
    return rearr
}

function imgs(state =ImgDatas ,action){
    switch (action.type){
        case Set_Center_Filter :
            return [
                ...reMapArr(state.slice(0 , action.index)),
                Object.assign({} , state[action.index],{
                    isCenter : 'true'
                }),
                ...reMapArr(state.slice(action.index + 1))
            ]
        default :
            return state
    }
}

const SliderApp = combineReducers({
    imgs
})
export default SliderApp


