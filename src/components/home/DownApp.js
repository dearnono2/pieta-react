import React from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap';

const DownApp = () => {
  return (
    <DownAppSection>
      <div className="inner">
        <div className="txt-container">
          <h2>
            아이폰, 안드로이드<br />
            모든 폰에서.
          </h2>
          <p>
            Pietà를 통해 다양한 작가와<br />
            작품들을 감상하시고 소통하세요.
          </p>
          <div className="store-box">
            <a href="" className="apple-store">
              <img src="images/ios_btn.png" alt="apple store" />
            </a>
            <a className="google-play">
              <img src="images/aos_btn.png" alt="google play" />
            </a>
          </div>
        </div>
      </div>
    </DownAppSection>
  )
}

const DownAppSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 300px 0 280px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #24242e;
    z-index: -1;
  }
  .inner {
    position: relative;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    .txt-container {
      position: relative;
      padding: 120px 80px 0;
      h2 {
        color: inherit;
        margin-bottom: 38px;
        line-height: 1.16;
        font-size: 4.2em;
        color: #fff;
      }
      p {
        font-weight: 500;
        font-size: 1.5em;
        line-height: 1.3;
        color: #fff;
      }
      .store-box {
        display: flex;
        margin-top: 60px;
        a {
          display: block;
          width: 150px;
          height: 44px;
          &.apple-store {
            margin-right: 15px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .img {
      position: absolute;
      top: -110px;
      right: -50px;
      width: 1105px;
      height: 1184px;
      opacity: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
` 

export default DownApp;