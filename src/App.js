import { Fragment } from 'react';
import Header from './components/Header/Header'
//import Login from './screens/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer'
const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ItemListContainer />
    </Fragment>
  );
}

export default App;
