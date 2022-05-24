import { Link } from 'react-router-dom';

const HomePageView = () => {
  return (
    <div>
      <h2>CUNYFirst Clone</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={'/instructors'}> All Instructors </Link>
        <Link to={'/courses'} style={{ marginTop: '15px' }}>
          All Courses
        </Link>
      </div>
    </div>
  );
};

export default HomePageView;
