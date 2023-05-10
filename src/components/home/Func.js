import React from "react";
import styled from "styled-components";


const Func = () => {
  return (
    <FuncSection>
      <div className="txt-container">
        <h2>
          Pietà의 다양한<br />
          기능을 소개합니다.
        </h2>
        <p>
          SNS를 기반으로하는<br />
          NFT Market Place를 경험하세요.
        </p>
        <a href="" className="detainViewBtn">자세히보기</a>
      </div>
      <div className="img-container">
        <div className="img img00">
          <img src="images/func_mo00.png" alt="func_mo00" />
        </div>
        <div className="img img01">
          <img src="images/func_mo01.png" alt="func_mo01" />
        </div>
        <div className="img img02">
          <img src="images/func_mo02.png" alt="func_mo02" />
        </div>
        <div className="img img03">
          <img src="images/func_mo03.png" alt="func_mo03" />
        </div>
        <div className="img img04">
          <img src="images/func_mo04.png" alt="func_mo04" />
        </div>
      </div>
    </FuncSection>
  );
};

const FuncSection = styled.div`
      position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  .txt-container {
    position: absolute;
      max-width: 1440px;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    h2 {
      color: black;
        font-weight: 900;
        font-size: 4.5em;
        line-height: 1.2;
        letter-spacing: -0.01em;
        margin-bottom: 21px;
    }
    p {
      color: #777;
        font-size: 1.876em;
        line-height: 1.4;
        margin-top: 16px;
        margin-bottom: 40px;
    }
    .detainViewBtn {
      display: block;
      width: 190px;
    background-color: #24242e;
    color: #fff;
    font-size: 1.5em;
    line-height: 2.5;
    text-align: center;
    border-radius: 48px;
    }
  }
  .img-container {
      position: absolute;
      top: 35%;
      right: 10%;
      .img {
        position: absolute;
        width: 735px;
        height: 735px;
        &.img00 {
          right: 209px;
          top: -294px;
        }
        &.img01 {
          right: -314px;
          top: -44px;
        }
        &.img02 {
          right: 208px;
          top: 230px;
        }
        &.img03 {
          right: 730px;
          bottom: -1234px;
        }
        &.img04 {
          right: 211px;
          top: 765px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
`;

export default Func;
