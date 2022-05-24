import { Link } from 'react-router-dom';

const EditCourseView = (props) => {
  const { course, handleChange, handleSubmit } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2
            style={{
              fontWeight: 'bold',
              fontFamily: 'Courier, sans-serif',
              fontSize: '20px',
              color: '#11153e',
            }}
          >
            Edit Course
          </h2>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>
            Title:{' '}
          </label>
          <input
            type="text"
            name="title"
            defaultValue={course.title}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>
            Timeslot:{' '}
          </label>
          <input
            type="text"
            name="timeslot"
            defaultValue={course.timeslot}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>
            Instructor Id:{' '}
          </label>
          <input
            type="text"
            name="instructorId"
            defaultValue={course.instructorId}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>
            Location:{' '}
          </label>
          <input
            type="text"
            name="location"
            defaultValue={course.location}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
      </div>
      <div>
        <Link to={'/'}>
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default EditCourseView;
