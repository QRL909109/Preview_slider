/**
 * Created by Administrator on 2016/8/24 0024.
 */
import {combineReducers} from 'redux'
import { Set_Center_Filter } from '../actions/index'

/*
 * 需要npm install json-loader
 * 识别路径中的JSON对象
 * */
var imgData = require('../../static/data/imgDatas.json');

/* @type (function(){})()  立即执行函数
 * @param imageDatasArr Json对象
 * @return new JSON
 * @功能 1.将图片名信息转成图片URL路径信息
 *      2.根据 奇偶 添加isRight属性
 * */
imgData.forEach((item,index)=>{
    item.isRight = index % 2;
    item.img = '../static/imgs/'+item.img;
})

function imgs(state =imgData){
    return state
}

function current(state , action){
    switch(action.type){
        case Set_Center_Filter:
            return action.index;
        default:
            return 0;
    }
}
const SliderApp = combineReducers({
    imgs,
    current
})
export default SliderApp


