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
                    imgs={this.props.imgs}/>

                <SetCenterFilter
                    imgs={this.props.imgs}
                    onCenterClick ={index => this.props.onIncrement(index)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgs: state.imgs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement:  (index) => dispatch(setCenterFilter(index))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
