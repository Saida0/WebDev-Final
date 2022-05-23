import { Link } from 'react-router-dom';
const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>Location: {course.location}</h3>
      <h3>Timeslot: {course.timeslot}</h3>
      <h3>
        Instructor:
        {course.instructor ? (
          <Link to={`/instructor/${course.instructor.id}`}>
            <h3>
              {course.instructor.firstname + ' ' + course.instructor.lastname}
            </h3>
          </Link>
        ) : (
          <h3>staff</h3>
        )}
      </h3>
      <div>
        <Link to={'/'}>
          {' '}
          <button>Back to Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default CourseView;
