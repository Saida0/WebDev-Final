import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  if (!props.allInstructors.length) {
    return(
      <div>There are currently no instructors.
        <Link to={`/newinstructor`}>
          <button>Add New Instructor</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
     {  props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname; 
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name} <button> X </button> </h1>
        </Link>
          <p>{instructor.department}</p>
        </div>
        );
      })} 
        <div><Link to={`/newinstructor`}>
          <button>Add New Instructor</button>
        </Link></div>
      <div><Link to={'/'} > <button>Back to Home</button> </Link></div>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;