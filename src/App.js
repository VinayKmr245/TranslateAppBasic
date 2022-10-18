import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dictionary from "./Dictionary";
import Synonym from "./Synonym";
import Translate from "./Translate";
function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Translate />}></Route>
          <Route exact path="/Synonym" element={<Synonym />}></Route>
          <Route exact path="/Dictionary" element={<Dictionary />}></Route>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
