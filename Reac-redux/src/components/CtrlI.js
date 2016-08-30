/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
export default class CtrlI extends Component{
    render(){
        var ctrlClassName = this.props.right == 'true'?'ctrl-i ctrl-i_right':'ctrl-i';
        ctrlClassName += this.props.isCenter == 'true'?' ctrl-i_active':'';

        return(
            <a className={ctrlClassName} onClick={this.props.onClick}>
                <img src={this.props.img} alt=""/>
            </a>
        )
    }
}
