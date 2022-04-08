import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import StoreProvider from './context/provider';
import Checkout from './pages/Checkout';
import Final from './pages/Final';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/final' component={Final} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
