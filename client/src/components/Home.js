import React from 'react';
import brunch2 from './brunch2.jpg'
// note button link not yet functional
const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
        <h2>Planning Your Next Brunch?</h2>
        <span class="text-box">Find restaurant recommendations in Washington, DC</span>
        <button type="button" className="btn btn-md btn-danger">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
