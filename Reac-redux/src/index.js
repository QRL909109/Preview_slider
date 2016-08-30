/**
 * Created by Administrator on 2016/8/24 0024.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import SliderApp from './reducers/reducers'

let store = createStore(SliderApp)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('Pic_slider')
)