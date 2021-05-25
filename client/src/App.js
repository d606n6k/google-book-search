import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SavedPage from "./components/SavedPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/saved">
          <SavedPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
