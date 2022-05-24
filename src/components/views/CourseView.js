import { Link } from 'react-router-dom';
const CourseView = (props) => {
  const { course, editCourse } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>Location:{course.location} </h3>
      <form>Location: <input id="loc" type="text" placeholder={course.location}/>
      <h3>Timeslot: {course.timeslot}</h3>
      Timeslot: <input id="time" type="text" placeholder={course.timeslot}/>
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
      InstructorId: <input id="ins" type="text" placeholder={course.instructorId}/>
      <br/>
      <br/>
      <button type="submit"
      onClick={() =>
                    editCourse({ id: course.id, location: setLocation(props), timeslot: setTime(props), instructorId: setInstructor(props) })
                  }
                >
                  Edit
                </button></form>
      
      <div>
        <Link to={'/'}>
          {' '}
          <button>Back to Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

function setLocation(props){
  if(document.getElementById("loc").value===""){
    return document.getElementById("loc").placeholder
  }
  return document.getElementById("loc").value
}

function setTime(props){
  if(document.getElementById("time").value===""){
    return document.getElementById("time").placeholder
  }
  return document.getElementById("time").value
}

function setInstructor(props){
  if(document.getElementById("ins").value===""){
    return document.getElementById("ins").placeholder
  }
  return document.getElementById("ins").value
}

export default CourseView;
