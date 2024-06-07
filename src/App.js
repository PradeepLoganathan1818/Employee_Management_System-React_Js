import ListEmployee from "./components/ListEmployee.jsx";
import './App.css';
import Headercomponent from "./components/Headercomponent.jsx";
import Footercomponent from "./components/Footercomponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from './components/Addemployee.jsx';

function App() {
  return (
    <div className="App">
      <Headercomponent />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployee />}></Route>
            <Route path="/employees" element={<ListEmployee />}></Route>
            <Route path="/addemployees" element={<AddEmployee />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployee />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footercomponent />
    </div>
  );
}

export default App;
