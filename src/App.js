import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/pages/HomePage/HomePage';
import StatePage from './components/pages/StatePage/StatePage';
import StatePeriodPage from './components/pages/StatePeriodPage/StatePeriodPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/state" exact>
          <StatePage />
        </Route>

        <Route path="/period" exact>
          <StatePeriodPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
