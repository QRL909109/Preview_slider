/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React ,{Component , PropTypes} from 'react'
import {connect} from 'react-redux'
import { setCenterFilter } from '../actions'
import ShowPic from '../components/ShowPic'
import SetCenterFilter from '../components/SetCenterFilter'

class App extends Component{
    render(){
        const {dispatch , imgs } = this.props;
        return(
            <div className="slider">
                <ShowPic
                    imgs = {imgs}/>

                <SetCenterFilter
                    imgs={imgs}
                    onCenterClick ={index => dispatch(setCenterFilter(index))
                 }/>
            </div>
        )
    }
}

function select(state){
    return {
        imgs : state.imgs
    }
}

export default connect(select)(App)
