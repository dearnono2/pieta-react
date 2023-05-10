import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Home from "./components/home/Home";
import Pieta from "./components/sub/Pieta";
import Function from "./components/sub/Function";
import SubSrp from "./components/sub/SubSrp";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Pieta" element={<Pieta />}></Route>
          <Route path="/Function" element={<Function />}></Route>
          <Route path="/SubSrp" element={<SubSrp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
