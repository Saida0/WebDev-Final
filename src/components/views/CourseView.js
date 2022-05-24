import { Link } from 'react-router-dom';
const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>Location: {course.location}</h3>
      <h3>Timeslot: {course.timeslot}</h3>
      <h3>
        Instructor: {' '}
        {course.instructor ? (
          <Link to={`/instructor/${course.instructor.id}`}>
            {course.instructor.firstname + ' ' + course.instructor.lastname}
          </Link>
        ) : (
          ' TBA'
        )}
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={`/course/edit/${course.id}`}>
          <button>Edit</button>{' '}
        </Link>
        <Link to={'/'}>
          <button style={{ marginTop: '15px' }}>Back to Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default CourseView;
