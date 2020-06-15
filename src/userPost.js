import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const UserPost = () => {
  return (
    <div>
      <p>this is post users</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userPost: state.userReducer,
  };
}
export default connect(mapStateToProps)(UserPost);
