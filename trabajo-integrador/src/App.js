// import logo from './logo.svg';
// import './App.css';

import { Switch, Route, Redirect } from "react-router-dom";
import Index from "./screens/Index/Index";
import Movie from "./screens/Movie/Movie";
import Movies from "./screens/Movies/Movies";
import Serie from "./screens/Serie/Serie";
import Series from "./screens/Series/Series";
import Favourites from "./screens/Favourites/Favourites";
import Results from "./screens/Results/Results";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/movie/:id" component={Movie} />
      <Route exact path="/series" component={Series} />
      <Route path="/series/:id" component={Serie} />
      <Route path="/results" component={Results} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
