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
        const {imgs,current} = this.props;
        return(
            <div className="slider">
                <ShowPic
                    imgs={imgs}
                    current = {current}/>

                <SetCenterFilter
                    imgs={imgs}
                    current = {current}
                    onCenterClick ={index => this.props.setCurrent(index)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgs: state.imgs,
        current : state.current
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrent:  (index) => dispatch(setCenterFilter(index))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
