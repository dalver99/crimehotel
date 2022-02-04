import { Link } from 'react-router-dom';

const Home = () => {
  const title = 'welcome to the gaybar';
  return (
    <div className="home">
      <h2>{title}</h2>
      <Link to={`/setmode`}>
        <p>Set mode to start!</p>
      </Link>
    </div>
  );
};

export default Home;
