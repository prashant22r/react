import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Greet from './components/Greet';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>welcome to react</h1>
      <Greet></Greet>
    </div>
  );
}

export default App;
