import React from 'react';
import CommentShow from './CommentShow';
import { connect } from 'react-redux';

const CommentsList = ({ comments }) => {

  const renderComments = comments.map(comment =>
    <CommentShow key={comment.id} comment={comment} />
  );

  return (
    <div>
    <p>Comments:</p>
      {renderComments}
    </div>
  )
}

export default CommentsList;
