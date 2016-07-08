import React from 'react';

class App extends React.Component{
    getInitialState(){
        index : '12'
    }
    render(){
        return(
            <div>
                <img src="imgs/1.jpg" alt={this.state.index}/>
            </div>
        );
    }
}

export default App;