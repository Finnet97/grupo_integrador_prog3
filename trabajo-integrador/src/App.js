// import logo from './logo.svg';
// import './App.css';

import { Switch, Route } from "react-router-dom";

import Index from "./screens/Index/Index";
import SeeAll from "./screens/SeeAll/SeeAll";
// import Movie from "./screens/Movie/Movie";
// import Serie from "./screens/Serie/Serie";
import MovieDetail from "./screens/MovieDetail/MovieDetail";
import SerieDetail from "./screens/SerieDetail/SerieDetail";
import Favourites from "./screens/Favourites/Favourites";
import SearchResults from "./screens/SearchResults/SearchResults";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/seeall/:type/:endpoint" component={SeeAll} />
      <Route exact path="/movie/:id" component={MovieDetail} />
      <Route path="/series/:id" component={SerieDetail} />
      <Route path="/SearchResults" component={SearchResults} />
      <Route exact path="/favourites" component={Favourites} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
