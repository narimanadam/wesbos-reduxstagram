import React from "react";
import { connect } from "react-redux";
import Photo from "./Photo";

const PhotoGrid = ({ posts }) => {
  return (
    <div className="photo-grid">
      {posts.map((post, i) => (
        <Photo
          key={i}
          caption={post.caption}
          code={post.code}
          imgSrc={post.display_src}
          likes={post.likes}
          index={i}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PhotoGrid);
