import "./App.css";
import Aside from "./components/Aside";
import "./assets/css/Aside.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aside />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
