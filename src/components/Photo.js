import React from "react";
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import { increment } from "../actions";

const Photo = ({ caption, code, imgSrc, likes, comments, index, dispatch }) => {
  return (
    <div>
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${code}`}>
            <img src={imgSrc} alt={caption} className="grid-photo" />
          </Link>
          <ReactCSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className="likes-heart">
              {likes}
            </span>
          </ReactCSSTransitionGroup>
        </div>
        <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={e => dispatch(increment(index))}>
              &hearts; {likes}
            </button>
            <Link className="button" to={`view/${code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[code] ? comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(Photo);
