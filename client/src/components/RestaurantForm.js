import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createRestaurant } from '../actions';
import {FormControl, FormGroup} from 'react-bootstrap';

class RestaurantForm extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      cuisine: '' ,
      neighborhood: '',
      price: '',
      dress_code: '',
      image: ''
    };
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createRestaurant, history } = this.props;
    createRestaurant(this.state, history);
  }

  render(){
    return (
      <div className="container-fluid">
      <h6>Add Brunch Recommendation</h6>
        <form style={{ width: 600}} onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Restaurant Name:</label>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Cuisine:</label>
            <FormControl
              type="text"
              name="cuisine"
              value={this.state.cuisine}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Neigbhorhood:</label>
            <FormControl
              type="text"
              name="neighborhood"
              value={this.state.neighborhood}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Price:</label>
            <FormControl componentClass="select" placeholder="select">
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
              value={this.state.neighborhood}
              onChange={this.handleChange}
            />
            <br></br>

            <label>Image URL:</label>
            <FormControl
              className="form-control"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit Brunch Spot</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default connect(null, { createRestaurant })(RestaurantForm)
