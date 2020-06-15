import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserPost extends Component {
  GetListOfPosts = () => {
    return this.props.userReducer.map((el) => {
      return <li key={el.posts}>{el.posts}</li>;
    });
  };

  render() {
    return <div>{this.GetListOfPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}
export default connect(mapStateToProps)(UserPost);
