import React from "react";
import Photo from "./Photo";
import { connect } from "react-redux";
import Comments from "./Comments";

const Single = ({ posts, match, comments }) => {
  const { postId } = match.params;
  const i = posts.findIndex(post => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo
        caption={post.caption}
        code={post.code}
        imgSrc={post.display_src}
        likes={post.likes}
      />
      <Comments comments={postComments} currentPost={post} />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

export default connect(mapStateToProps)(Single);
