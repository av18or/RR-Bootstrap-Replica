import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListings from './components/StoreListings'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

    <TopBar />

    <Background />

    <StoreListings />

      <h1></h1>
    </div>
  );
}

export default App;
