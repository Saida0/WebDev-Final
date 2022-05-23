import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are currently no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
      <div><Link to={'/'} > <button>Back to Home</button> </Link></div>
    </div>
    );
  }
  
  return (
    <div>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
      <Link to={'/'} > <button>Back to Home</button> </Link>
    </div>
  );
};


export default AllCoursesView;