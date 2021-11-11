import { Fragment } from 'react';
import Header from './components/Header/Header'
//import Login from './screens/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
