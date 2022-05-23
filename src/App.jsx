import logo from './logo.svg';
import './App.css';
import UserDetail from './components/user-detail/UserDetail';

function App() {
  let details = [
    {
        "id" : "1",
        "name" : "James",
        "email" : "james@gmail.com"
    },
    {
        "id" : "2",
        "name" : "Maggie",
        "email" : "magie@gmail.com"
    },
    {
        "id" : "3",
        "name" : "Xolani",
        "email" : "xolani@gmail.com"
    },

]
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>

      {/* <UserDetail details={details}/> */}
    </>
   
  );
}

export default App;
