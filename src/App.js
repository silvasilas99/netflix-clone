import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Row from "./components/Row/Row";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Row title='Netflix Originals' movieType='netflix-originals' />
      <Row title='Trending Now' movieType='trending-now' />
      <Row title='Top Rated' movieType='top-rated' />
      <Row title='Action Movies' movieType='action-movies' />
      <Row title='Horror Movies' movieType='horror-movies' />
      <Row title='Romance Movies' movieType='romance-movies' />
      <Row title='Documentaries Movies' movieType='documentaries-movies' />
    </div>
  );
}

export default App;
