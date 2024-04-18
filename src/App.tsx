import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Share from "./Pages/Shares/share";


const App = () => {

  return (
    <Router>
      <Routes>

      <Route path="/Share" element={<Share/>}/>

      </Routes>

    </Router>

  
  );
};

export default App
