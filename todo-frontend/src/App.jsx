import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';  
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/tasks" element={<TasksPage />} /> {/* Tasks page */}
      </Routes>
    </Router>
  );
};




export default App;
