import React from 'react';
import Card from '../../components/Card';
import API from '../../utils/API';
import './style.css';

class Profile extends React.Component {
    state = {
        user: '',
        myTours: []
    }

    componentDidMount() {
        console.log(this.props.user)
        let user = this.props.user
        API.getMyTours(user)
            .then(res => {
                console.log("Got Tours")
                console.log(res.data)
                this.setState({
                    user,
                    myTours: res.data
                })
            })
    }

    deleteTour = (id) => {
        console.log("Delete Tour")
        API.deleteTour(id)
            .then(res => {
                console.log("Tour Deleted")
                API.getMyTours(this.state.user)
                    .then(res2 => {
                        this.setState({
                            myTours: res2.data
                        })
                    })
            })
    }

    render() {
        return (
            <div className='container'>
                {this.state.myTours.length ?
                    this.state.myTours.map((tour, i) => (
                        <Card
                            key={i}
                            type='delete'
                            deleteTour={this.deleteTour}
                            id={tour.id}
                            img={tour.src !== '' ? tour.img : ''}
                            name={tour.name}
                            currency={tour.currency}
                            price={tour.price}
                            url={tour.url}
                        />
                    ))
                    :
                    'No Tours yet!'}
            </div>
        )
    }
}

export default Profile;