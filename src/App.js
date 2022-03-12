import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
       <LandingPage title={'This is a title'} paragraph = {'lorem ipsum de solo....'} />
    </div>
  );
}

export default App;
