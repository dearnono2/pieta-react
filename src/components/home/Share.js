import React from 'react'
import { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

function Share() {
  // gsap
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from("item", {
          duration: 0.5,
          opacity: 0,
          y: 100,
        })
    }, el);
  }, []);


  const images = ['00','01','02','03','04','05','06','07','08','09','10'];

  return (
    
    <ShareSection>
      <div className="txt-container">
        <div className="moving-txt">
          <div className="txt-box">
            <h2>감성을 공유하다</h2>
            <h2>당신의 일상을 소유하다</h2>
            <h2>예술, 일상, 메타버스, 모든 것이 작품</h2>
          </div>
        </div>
        <p>New Social Network NFT Marketplace</p>
        <a href="/">자세히보기</a>
        {/* 왜 Link를 사용하면 에러가 뜰까? */}
        {/* <Link to="/">자세히보기</Link> */}
      </div>
      <div className="img-container" ref={el}>
        {images.map((v, i) => (
          <item className={`img art${v}`} key={i}>
            <img src={`./images/a${v}.png`} alt={`art${i}`} />
          </item>
        ))}
        <div className="img mobile">
          <img src="./images/mo.png" alt="mobile" />
        </div>
      </div>
    </ShareSection>
  )
}

const ShareSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .txt-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 18%;
    gap: 21px;
    width: 100%;
    height: 255px;
    .moving-txt {
      width: 100%;
      height: 80px;
      overflow: hidden;
      text-align: center;
      .txt-box {
        h2 {
          width: 100%;
          color: black;
          font-weight: 900;
          font-size: 4.5em;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 21px;
        }
      }
    }
    p {
      color: #777;
      font-size: 1.876em;
    }
    a {
      margin-top: 20px;
    }
  }
  .img-container {
    position: absolute;
    bottom: -36.9%;
    width: 100%;
    height: 100vh;
    z-index: -1;
    .img {
      position: absolute;
        width: 11.31%;
      &.art00 {
        top: 10%;
        left: 1%;
      }
      &.art01 {
        top: 35%;
        left: 1%;
      }
      &.art02 {
        left: 1%;
        top: 61.2%;
      }
      &.art03 {
        left: 13%;
        top: 20.8%;
      }
      &.art04 {
        top: 50%;
        left: 13%;
      }
      &.art05 {
        top: 50%;
        left: 25%;
      }
      &.art06 {
        top: 57%;
        left: 62.7%;
      }
      &.art07 {
        top: 23.6%;
        left: 75.3%;
      }
      &.art08 {
        left: 75.3%;
        top: 47.8%;
      }
      &.art09 {
        left: 87.8%;
        top: 21.6%;
      }
      &.art10 {
        left: 87.8%;
        top: 47.8%;
      }
      &.mobile {
        left: 50%;
        top: 48.7%;
        transform: translate(-50%, -50%);
        width: 21.2%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

`

export default Share;