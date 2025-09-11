// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import Movies from "./screens/Movies/Movies";
import NotFound from "./screens/NotFound/NotFound";
import Serie from "./screens/Serie/Serie";
import Series from "./screens/Series/Series";
import Movie from "./screens/Movie/Movie"
import Results from "./screens/Results/Results";
function App() {
  return (
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/Movies" exact={true} component={Movies}/>
        <Route path="/Movie/id/:id" component={Movie}/>
        <Route path="/Series" exact={true} component={Series}/>
        <Route path="/Serie/id/:id" component={Serie}/>
        <Route path="/Results" exact={true} component={Results}/>
        <Route path="" component={NotFound}/>
      </Switch>
  );
}

export default App;
