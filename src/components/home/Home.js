import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/Header";
import Pieta from "../sub/Pieta";
import Function from "../sub/Function";
import SubSrp from "../sub/SubSrp";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* 바뀌는 내용물 */}
        <Routes>
          <Route path="/" element={<Pieta />}></Route>
          <Route path="/" element={<Function />}></Route>
          <Route path="/" element={<SubSrp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;