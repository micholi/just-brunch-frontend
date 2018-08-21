import React from 'react';
import brunch2 from './brunch2.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// note button link not yet functional
const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
        <h2>Planning Your Next Brunch?</h2>
        <span className="welcome-text">Find restaurant recommendations in your area!</span>
        <Link to="/restaurants">
            <Button className="btn btn-md btn-danger">
              Get Started
            </Button>
         </Link>
      </div>
    </div>
  );
}

export default Home;
