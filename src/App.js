import { Fragment } from 'react';
import Header from './components/Header/Header'
//import Login from './screens/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import Button from './components/Button/counterButton';
const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ItemListContainer />
      <Button />
    </Fragment>
  );
}

export default App;
