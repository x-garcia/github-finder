import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../layout/Alert';

const Home = (props) => {
  return (
    <>
      <Alert />
      <Search />
      <Users />
    </>
  );
};

export default Home;
