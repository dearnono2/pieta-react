import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Srp = () => {
  return (
    <SrpSection>
      <div className="txt-container">
        <h2>Share Art Protocol</h2>
        <p>Tech와 Art가 결합된 새로운 거래 프로토콜을 제공합니다.</p>
        <a className="detailViewBtn" href="">자세히보기</a>
      </div>
    </SrpSection>
  );
};

const SrpSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(images/share_bg.png) center no-repeat;
    background-size: cover;
  }
  .txt-container {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h2 {
      color: black;
      font-weight: 900;
      font-size: 6.32em;
      line-height: 1.34;
      letter-spacing: -0.01em;
      margin-bottom: 21px;
    }
    p {
      color: #777;
      font-size: 1.876em;
      font-family: Poppins;
      margin-top: 16px;
      margin-bottom: 40px;
    }
    a {
      display: inline-block;
      width: 190px;
      background-color: rgb(36, 36, 46);
      color: rgb(255, 255, 255);
      font-size: 1.5em;
      line-height: 2.5;
      text-align: center;
      border-radius: 48px;
    }
  }
`

export default Srp;
