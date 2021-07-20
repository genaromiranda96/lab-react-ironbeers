import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


const  Homepage = () =>  {

    return (
            
        <div class="">

            <section className='container-card '>
                    <img src='./beers.png' />
                    <Link to='/beers'>All Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis gravida eget ipsum in ultricies. Vestibulum at lectus diam. 
                    Vestibulum sit amet nisi ac velit cursus ullamcorper. In feugiat a nulla at efficitur.</p>
            </section>

            <section className='container-card '>
                    <img src='./new-beer.png' />
                    <Link to='/random-beer'>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis gravida eget ipsum in ultricies. Vestibulum at lectus diam. 
                    Vestibulum sit amet nisi ac velit cursus ullamcorper. In feugiat a nulla at efficitur.</p>
            </section>

            <section className='container-card '>
                    <img src='./random-beer.png' />
                    <Link to='/new-beer'>New Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis gravida eget ipsum in ultricies. Vestibulum at lectus diam. 
                    Vestibulum sit amet nisi ac velit cursus ullamcorper. In feugiat a nulla at efficitur.</p>
            </section>



        </div>
    );

}

export default Homepage;