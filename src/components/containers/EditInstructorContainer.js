import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk, fetchInstructorThunk } from '../../store/thunks';

class EditInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      timeslot: '',
      location: '',
      instructorId: null,
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    this.props.fetchInstructor(this.props.match.params.id);
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

    let instructor = {
      id: this.props.instructor.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
      imageUrl: this.state.imageUrl,
      courses: this.state.courses,
    };

    if (
      instructor.firstname === '' ||
      instructor.lastname === '' ||
      instructor.department === ''
    ) {
      alert('Fields cannot be empty');
    } else {
      await this.props.editInstructor(instructor);
      this.setState({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        department: null,
        imageUrl: null,
        courses: [],
        redirect: true,
        redirectId: this.props.instructor.id,
      });
    }
  };

  render() {
    //go to single instructor view of newly created instructor
    if (this.state.redirect) {
      return <Redirect to={`/instructor/${this.state.redirectId}`} />;
    }
    console.log(this.props.instructor);
    return (
      <EditInstructorView
        instructor={this.props.instructor}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  return {
    instructor: state.instructor,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
  };
};

export default connect(mapState, mapDispatch)(EditInstructorContainer);
