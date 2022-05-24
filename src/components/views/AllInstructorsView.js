import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllInstructorsView = (props) => {
  let { allInstructors, deleteInstructor } = props;

  return (
    <div>
      {!allInstructors.length ? (
        <h3>There are currently no instructors.</h3>
      ) : (
        <h3>All Instructors</h3>
      )}
      {allInstructors.length > 0 &&
        allInstructors.map((instructor) => {
          let name = instructor.firstname + ' ' + instructor.lastname;
          return (
            <div
              key={instructor.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlock: '20px',
              }}
            >
              <Link
                to={`/instructor/${instructor.id}`}
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
                  {name}
                </h1>
              </Link>
              <button
                style={{ marginLeft: 20, height: 30, width: 30 }}
                onClick={() => deleteInstructor(instructor.id)}
              >
                X
              </button>
            </div>
          );
        })}
      <div
        style={{ marginBlock: 10, display: 'flex', flexDirection: 'column' }}
      >
        <Link to={`/newinstructor`}>
          <button>Add New Instructor</button>
        </Link>
        <Link to={'/'} style={{ marginTop: 10 }}>
          <button>Back to Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
