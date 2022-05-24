import { Link } from 'react-router-dom';

const AllCoursesView = (props) => {
  let { courses, deleteCourse } = props;

  return (
    <div>
      {!courses.length ? (
        <h3>There are currently no courses.</h3>
      ) : (
        <h3>All Courses</h3>
      )}
      {courses.length > 0 &&
        courses.map((course) => {
          let title = course.title;
          return (
            <div
              key={course.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlock: '20px',
              }}
            >
              <Link
                to={`/course/${course.id}`}
                style={{ textDecoration: 'none' }}
              >
                <h1
                  style={{
                    border: '1px solid #000',
                    padding: '15px',
                    borderRadius: '5px',
                    margin: 0,
                  }}
                >
                  {title}
                </h1>
              </Link>
              <button
                style={{ marginLeft: 20, height: 30, width: 30 }}
                onClick={() => deleteCourse(course.id)}
              >
                X
              </button>
            </div>
          );
        })}
      <div
        style={{ marginBlock: 10, display: 'flex', flexDirection: 'column' }}
      >
        <Link to={`/newcourse`}>
          <button>Add New Course</button>
        </Link>
        <Link to={'/'} style={{ marginTop: 10 }}>
          <button>Back to Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default AllCoursesView;
