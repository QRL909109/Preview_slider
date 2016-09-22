/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
export default class CtrlI extends Component{
    render(){
        var {isCenter , img , onClick} = this.props;
        var ctrlClassName = 'ctrl-i' + (isCenter? ' ctrl-i_active' :'');

        return(
            <a className={ctrlClassName} onClick={onClick}>
                <img src={img} alt=""/>
            </a>
        )
    }
}
