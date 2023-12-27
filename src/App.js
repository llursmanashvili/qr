import logo from "./logo.png";
import "./Ap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>დაასკანერე კოდი ან დააჭირე ღილაკს</p>
        <a
          className="App-link"
          href="https://qrco.de/befSq4"
          target="_blank"
          rel="noopener noreferrer"
        >
          ღილაკიი
        </a>
      </header>
    </div>
  );
}

export default App;
