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
      <img src = {instructor.imageUrl} alt={instructor.firstname}/>
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div>
          Assigned courses:
          {assignedCourses.map((course) => {
            return (
              <div key={course.id}>
                <Link to={`/course/${course.id}`}>
                  <h4>{course.title}</h4>
                </Link>
                <button
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
          {availableCourses.map((course) => {
            return (
              <div key={course.id}>
                <Link to={`/course/${course.id}`}>
                  <h4>{course.title}</h4>
                </Link>
                <button
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
      <div><Link to={'/'} > <button>Back to Home</button> </Link></div>
    </div>
  );
};

export default InstructorView;
