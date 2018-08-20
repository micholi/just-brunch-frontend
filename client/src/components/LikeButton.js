import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <Button
          className="btn btn-sm btn-outline-success"
          onClick={this.props.likeRestaurant}>
          Mmm... Brunch! {this.props.restaurant.likes}
          <Badge>{this.props.restaurant.likes}</Badge>
        </Button>
      </div>
    )
  }
}

export default LikeButton;
