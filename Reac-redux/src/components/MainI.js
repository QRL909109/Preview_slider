/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
export default class MainI extends Component{
    render(){
        var mainClassName = this.props.right== 'true'?'main-i main-i_right':'main-i';
        mainClassName += this.props.isCenter == 'true'?' main-i_active':'';

        return(
               <div className={mainClassName}>
                  <div className="caption">
                       <h2>{this.props.h1}</h2>
                       <h3>{this.props.h2}</h3>
                  </div>
                 <img src={this.props.img} alt=""/>
               </div>
        )
    }
}
