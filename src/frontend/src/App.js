import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/team/:teamName' element={<TeamPage />}></Route>
          <Route path='/team/:teamName/matches' element={<MatchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
