import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

class Allbeers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albeers: [],
        }
    }

    componentDidMount = () => { 
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((response) => {
            console.log('beers from the api:', response.data)
            this.setState({
                albeers: response.data,
            })
        })
        .catch((error) => {
            console.log('error', error);
        })
    } 

  render() {

    const { albeers } = this.state;

    return (
        <div>
                <h2>All Beers</h2>
                {albeers.map( (beer, index) => {
                    return(
                    <div className='container-beer' key={beer._id}> 
                        <img src={beer.image_url}/>
                        <section>
                            <Link to={`/beers/${beer._id}`} >{beer.name}</Link>
                            <p>{beer.tagline}</p>
                            <p><b>Created by:</b>{beer.contributed_by}</p>
                        </section>

                        
                    </div>
                    ) 
                })}
        </div>
    );
  }
}

export default Allbeers;

