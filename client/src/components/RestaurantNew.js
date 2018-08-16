import React, {Component} from 'react';
import { connect } from 'react-redux';

/*
const RestaurantNew = () => {
  return (
    <div>
      <h3>Add brunch spot placeholder.</h3>
    </div>
  );
}

export default RestaurantNew;
*/

// <Button className="btn btn-outline-primary" type="submit"> <span className="glyphicon glyphicon-ok"></span> Add Trail </Button>

class RestaurantNew extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      cuisine: '' ,
      neighborhood: '',
      price: '',
      dress_code: '',
    };
  }

  handleOnChange = event => {
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
      <div className="container-fluid text-center">
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <label>
            Restaurant Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
                />
          </label> <br></br>
          <label>
            Cuisine:
              <input
                className="form-control"
                type="text"
                name="cuisine"
                value={this.state.cuisine}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <label>
            Neigbhorhood:
              <textarea
                className="form-control"
                  style={{width: 150, height: 45}}
                type="text"
                name="neighborhood"
                value={this.state.neighborhood}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <label>
            Price:
              <select
                className="form-control"

                name="price_range"
                value={this.state.price_range}
                onChange={this.handleOnChange}
                >
                <option value="inexpensive">Inexpensive</option>
                <option value="moderate">Moderate</option>
                <option value="pricey">Pricey</option>
                </select>
          </label><br></br>
          <label>
            Dress Code:
              <textarea
                className="form-control"
                type="text"
                name="dress_code"
                placeholder="Dress Code"
                value={this.state.neighborhood}
                onChange={this.handleOnChange}
                />
          </label><br></br>

          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}


//export default connect(null, { createRestaurant })(RestaurantNew)
export default RestaurantNew;
