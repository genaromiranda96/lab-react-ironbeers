import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
        <nav class="Navbar">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img className='bear-logo' 
                    src="https://play-lh.googleusercontent.com/O6y1RzsD-CTAJ1xFo9U4WF0CLQWq_Qij3nS8Th59pruP_KHAb1HwDQCDb3pJ6t9unjk=s360-rw" />
                </a>
            </div>
        </nav>
    );
  }
}

export default Navbar;