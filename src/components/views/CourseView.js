import { Link } from "react-router-dom";
const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      {course.instructor ? (
        <h3>
          {course.instructor.firstname + ' ' + course.instructor.lastname}
        </h3>
      ) : (
        <h3>staff</h3>
      )}
      <div><Link to={'/'} > <button>Back to Home</button> </Link></div>
    </div>
    
  );
};

export default CourseView;
