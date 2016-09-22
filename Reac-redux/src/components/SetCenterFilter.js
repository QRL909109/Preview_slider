/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
import CtrlI from './CtrlI'
export default class SetCenterFilter extends Component{
    render() {
        return(
            <div className="ctrl">
                {this.props.imgs.map((imgi , index) =>
                    <CtrlI {...imgi}
                           key={index}
                           isCenter = {this.props.current == index}
                           onClick={()=>this.props.onCenterClick(index)}/>
                )}
            </div>
        )

    }
}
