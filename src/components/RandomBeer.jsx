import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RandomBeer: [],
        }
    }

    componentDidMount = () => { 
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            console.log('beers from the api:', response.data)
            this.setState({
                RandomBeer: response.data,
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
    } 

  render() {
    const { RandomBeer } = this.state
    return (
        <div>
                <h2>All Beers</h2>
                    <div  key={RandomBeer._id}> 
                        <img style={{height: '350px'}} src={RandomBeer.image_url}/>
                            <h3>{RandomBeer.name}</h3>
                            <p>{RandomBeer.tagline}</p>
                            <p><b>First brewed:</b>{RandomBeer.first_brewed}</p>
                            <p>Description: {RandomBeer.description}</p>
                            <p><b>Contributed by:</b>{RandomBeer.contributed_by}</p>
                    </div>           
        </div>
    );
  }
}

export default RandomBeer;