import { Link } from 'react-router-dom';

const InstructorView = (props) => {
  const { instructor, editCourse, allCourses } = props;
  let assignedCourses = allCourses.filter(
    (course) => course.instructorId === instructor.id
  );
  let availableCourses = allCourses.filter(
    (course) => course.instructorId !== instructor.id
  );

  return (
    <div>
      {instructor.imageUrl && (
        <img src={instructor.imageUrl} alt={instructor.firstname} />
      )}
      <h1>First Name: {instructor.firstname}</h1>
      <h3>Department: {instructor.department}</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          Assigned courses:
          {!assignedCourses.length && <p>This instructor has no assigned courses.</p>}
          {assignedCourses.length > 0 && assignedCourses.map((course) => {
            return (
              <div
                key={course.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link
                  to={`/course/${course.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h4 style={{marginBlock:5}}>{course.title}</h4>
                </Link>
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() =>
                    editCourse({ id: course.id, instructorId: null })
                  }
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div>
          Available courses:
          {!availableCourses.length && <p>There are no available courses.</p>}
          {availableCourses.length > 0 && availableCourses.map((course) => {
            return (
              <div
                key={course.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Link
                  to={`/course/${course.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h4 style={{marginBlock:5}}>{course.title}</h4>
                </Link>
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() =>
                    editCourse({ id: course.id, instructorId: instructor.id })
                  }
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={`/instructor/edit/${instructor.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={'/'}>
          <button style={{ marginTop: '15px' }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorView;
