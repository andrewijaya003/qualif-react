import logo from './logo.svg';
import './App.css';
import SamplePage from './pages/SamplePage/SamplePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage.jsx';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import ArtistPage2 from './pages/ArtistPage2/ArtistPage2';
import FavoritePage from './pages/FavoritePage.jsx/FavoritePage';

function App() {
  return (
    // <SamplePage></SamplePage>
    <Router>
      <Switch>
        <Route path="/album/:id">
          <AlbumPage></AlbumPage>
        </Route>

        <Route path="/artist/:name">
          <ArtistPage2></ArtistPage2>
        </Route>

        <Route path="/artist">
          <ArtistPage></ArtistPage>
        </Route>

        <Router path="/favorite/:name">
          <FavoritePage></FavoritePage>
        </Router>

        <Router path="/favorite">
          <FavoritePage></FavoritePage>
        </Router>

        <Route path="/">
          <ArtistPage></ArtistPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
