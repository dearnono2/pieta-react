import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/Header";
import Pieta from "../sub/Pieta";
import Function from "../sub/Function";
import SubSrp from "../sub/SubSrp";
import Share from "./Share";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* 바뀌는 내용물 */}
        <Routes>
          <Route path="/Pieta" element={<Pieta />}></Route>
          <Route path="/Function" element={<Function />}></Route>
          <Route path="/SubSrp" element={<SubSrp />}></Route>
        </Routes>
      </BrowserRouter>
      <Share />
    </>
  );
}

export default Home;
