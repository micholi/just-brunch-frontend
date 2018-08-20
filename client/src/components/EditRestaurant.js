import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editRestaurant } from '../actions';
import { FormControl, FormGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class EditRestaurant extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      neighborhood: '',
      cuisine: '',
      price_range: '',
      dress_code: '',
      image: ''
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createRestaurant(this.state)
    this.props.history.push('/restaurants')
  }

  render(){
    return (
      <div className="restaurant-form">
        <h5>Add Your Brunch Recommendation</h5>
        <form onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Restaurant Name:</label>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Cuisine:</label>
            <FormControl
              type="text"
              name="cuisine"
              value={this.state.cuisine}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Neighborhood:</label>
            <FormControl
              type="text"
              name="neighborhood"
              value={this.state.neighborhood}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Price Range:</label>
            <FormControl
              componentClass="select"
              placeholder="select"
              name="price_range"
              value={this.state.price_range}
              onChange={this.handleOnChange}
              >
              <option value="select">select</option>
              <option value="inexpensive">Inexpensive</option>
              <option value="moderate">Moderate</option>
              <option value="pricey">Pricey</option>
            </FormControl>
            <br></br>

            <label>Dress Code:</label>
            <FormControl
              className="form-control"
              type="text"
              name="dress_code"
              value={this.state.dress_code}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Image URL:</label>
            <FormControl
              className="form-control"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleOnChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit Brunch Spot</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default connect(null, { createRestaurant })(EditRestaurant)
