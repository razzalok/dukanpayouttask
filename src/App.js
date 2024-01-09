import "./App.css";
import Aside from "./components/Aside";
import "./assets/css/Aside.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aside />
        <div className="container">
          <Navbar />
          <Dashboard />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
