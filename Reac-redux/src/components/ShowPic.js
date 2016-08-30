/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
import MainI from './MainI'
export default class ShowPic extends Component{
    render(){
        return(
            <div className="main">
            {this.props.imgs.map((imgi , index)=>
                <MainI {...imgi}
                      key={index}
                      onChangeCenter={() => this.props.onCenterChange(index)} />
            )}
            </div>
        )
    }
}
