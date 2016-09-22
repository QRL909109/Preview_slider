/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React,{Component} from 'react'
export default class MainI extends Component{
    render(){
        var {isRight , isCenter , h1 ,h2 ,img} = this.props;
        var mainClassName = (isRight?'main-i main-i_right':'main-i')+
            (isCenter ?' main-i_active':'');

        return(
               <div className={mainClassName}>
                  <div className="caption">
                       <h2>{h1}</h2>
                       <h3>{h2}</h3>
                  </div>
                 <img src={img} alt=""/>
               </div>
        )
    }
}
