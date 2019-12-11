import React from "react";
import { removeComment } from "../actions";
import { connect } from "react-redux";

const Comment = ({ author, text, dispatch, index, postId }) => {
  return (
    <div className="comment">
      <p>
        <strong>{author}</strong>
        {text}
        <button
          className="remove-comment"
          onClick={e => dispatch(removeComment(postId, index))}
        >
          &times;
        </button>
      </p>
    </div>
  );
};

export default connect(null)(Comment);
