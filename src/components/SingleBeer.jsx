import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
        }
    }

    componentDidMount = () => { 

        const dynamicId = this.props.match.params.dynamicId;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${dynamicId}`)
        .then((response) => {
            console.log('response', response.data);
            this.setState({
                beer: response.data,
            })

        })
        .catch((error) => {
            console.log('error', error);
        })
        console.log('dynamicId', dynamicId);

    } 


  render() {

    const { beer } = this.state;

    return (
        <div>
                    <div key={beer._id}> 
                        <img style={{width: '100px'}} src={beer.image_url}/>
                        <section>
                            <p>{beer.name}</p>
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.tagline}</p>
                            <p>{beer.first_brewed}</p>
                            <p>{beer.description}</p>
                            <p><b>Created by:</b>{beer.contributed_by}</p>
                        </section>
                    </div>
        </div>
    );
  }
}

export default SingleBeer;

