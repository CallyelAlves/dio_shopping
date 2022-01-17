import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  const [isDark, setIsDark] = useState(false);
 
  function toggleTheme() {
    setIsDark(!isDark)
  }

  return(
    <Provider store={store}>
      <Container className={isDark ? 'bg-dark' : 'bg-white'} maxWidth="xl">
        <Router>
          <Header toggleTheme={toggleTheme} isDark={isDark} />
          <Routes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;
