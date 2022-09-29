import "./App.css";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import Group from "./components/Group/Group";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/groups/" element={<Group />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
