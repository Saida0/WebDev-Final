import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';

class NewInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      department: '',
      imageUrl: null,
      courses: [],
      redirect: false,
      redirectId: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let instructor = {
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
      const newInstructor = await this.props.addInstructor(instructor);

      this.setState({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        department: null,
        imageUrl: null,
        courses: [],
        redirect: true,
        redirectId: newInstructor.id,
      });
    }
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single instructor view of newly created instructor
    if (this.state.redirect) {
      return <Redirect to={`/instructor/${this.state.redirectId}`} />;
    }
    return (
      <NewInstructorView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
  };
};

export default connect(null, mapDispatch)(NewInstructorContainer);
