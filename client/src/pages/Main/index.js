import React from 'react';
import API from '../../utils/API';
import Card from '../../components/Card'

class Main extends React.Component {
    state = {
        tours: []
    }

    getTours = () => {
        console.log("Get Tours")
        API.getTours()
            .then(res => {
                console.log(res.data.results)
                this.setState({
                    tours: res.data.results
                })
            })
    }

    render() {
        return (

            <div>
                <button className='btn btn-primary' onClick={this.getTours}>Get Tours</button>

                {this.state.tours.length ?
                    this.state.tours.map((tour, i) => (
                        <Card
                            key={i}
                            src={tour.images[0].source_url}
                            name={tour.name}
                        />
                    ))
                    : ''}
            </div>
        )
    }
}

export default Main;