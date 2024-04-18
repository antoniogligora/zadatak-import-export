import logo from "./logo.svg";
import "./App.css";
import Brojevi from "./utilities/Numbers";
import * as everything from "./utilities/Functions";

function App() {
  return (
    <div className="App">
      <p>Moj prvi broj: {Brojevi.Broj1}</p>
      <p>Moj prvi broj: {Brojevi.Broj2}</p>
      <p>Prvi broj za zbrajanje je: {everything.x}</p>
      <p>Prvi broj za zbrajanje je: {everything.y}</p>
      <p>
        Suma tih 2 broja je: {everything.Zbrajanje(everything.x, everything.y)}
      </p>
    </div>
  );
}

export default App;
