import React from 'react';
import API from '../../utils/API';

class Main extends React.Component{
    state={

    }
    
    getTours = () => {
        console.log('Get Tours')
        API.getTours()
            .then(res => {
                console.log(res.data)
            })
    }
    render(){
        return(
            <div>
                <button className = 'btn btn-primary' onClick={this.getTours}>Get Tours</button>
            </div>
        )
    }
}

export default Main;