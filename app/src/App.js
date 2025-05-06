import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Login, Home, Profile } from './pages';
import { ProductDetails } from './pages/ProductDetail';
import { Header } from './components';

function App() {
  return (
    <Router>           
      <div>
        <Header />
        <Switch>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;