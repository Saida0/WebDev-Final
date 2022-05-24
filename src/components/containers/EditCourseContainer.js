import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk, fetchCourseThunk } from '../../store/thunks';

class EditCourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.course.title,
      timeslot: this.props.course.timeslot,
      location: this.props.course.location,
      instructorId: this.props.course.instructorId,
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    this.props.fetchCourse(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let course = {
      id: this.props.course.id,
      title: this.state.title,
      timeslot: this.state.timeslot,
      location: this.state.location,
      instructorId: this.state.instructorId,
    };

    if (
      course.title === '' ||
      course.timeslot === '' ||
      course.location === '' ||
      course.instructorId === ''
    ) {
      alert('Fields cannot be empty');
    } else {
      await this.props.editCourse(course);

      this.setState({
        title: this.state.title,
        timeslot: this.state.timeslot,
        location: this.state.location,
        instructorId: null,
        redirect: true,
        redirectId: this.props.course.id,
      });
    }
  };

  render() {
    //go to single course view of newly created course
    if (this.state.redirect) {
      return <Redirect to={`/course/${this.state.redirectId}`} />;
    }
    return (
      <EditCourseView
        course={this.props.course}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  return {
    course: state.course,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
  };
};

export default connect(mapState, mapDispatch)(EditCourseContainer);
