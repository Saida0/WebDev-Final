import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk, editCourseThunk} from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
  }
  
  render() {
    return (
      <CourseView 
        course={this.props.course}
        editCourse={this.props.editCourse}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
  };
};

export default connect(mapState, mapDispatch)(CourseContainer);