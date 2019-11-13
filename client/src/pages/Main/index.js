import React from 'react';
import API from '../../utils/API';
import Card from '../../components/Card'

import './style.css'

class Main extends React.Component {
    state = {
        city: '',
        tours: []
    }

    handleInputChange = event => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    getTours = () => {
        console.log("Get Tours")
        let { city } = this.state;
        API.getTours(city)
            .then(res => {
                console.log(res.data.results)
                for (let i = 0; i < res.data.results.length; i++) {
                    console.log(res.data.results[i])
                }
                this.setState({
                    tours: res.data.results
                })
            })
    }

    render() {
        return (

            <div className='container' style={{marginTop: '4rem'}}>
                <div className='searchBar row'>
                    <div className='col-3'>
                        <h3>Search</h3>
                        <input className='form-control' name='city' id='city' value={this.state.city} type='text' onChange={this.handleInputChange} placeholder="Enter a city..." />
                        <button className='btn' onClick={this.getTours} style={{marginTop: '1rem'}}>Get Tours</button>
                    </div>
                </div>

                {this.state.tours.length ?
                    this.state.tours.map((tour, i) => (
                        <Card
                            key={i}
                            src={tour.images[0] !== undefined ? tour.images[0].source_url : ''}
                            name={tour.name}
                            type={tour.price.currency}
                            price={tour.price.amount}
                            url={tour.vendor_tour_url}
                        />
                    ))
                    : ''}
            </div>
        )
    }
}

export default Main;