import React, { useRef, useState } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment } from "../actions";

const Comments = ({ comments, dispatch, currentPost }) => {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const commentForm = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addComment(currentPost.code, author, comment));
  };
  return (
    <div className="comments">
      {comments.map((postComment, i) => (
        <Comment
          text={postComment.text}
          author={postComment.user}
          index={i}
          key={i}
          postId={currentPost.code}
        />
      ))}
      <form ref={commentForm} className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="author"
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="comment"
          onChange={e => setComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default connect(null)(Comments);
