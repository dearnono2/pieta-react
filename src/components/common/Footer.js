import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div className="inner">
        <nav className="ft-nav">
          <a className="ft-logo">
            <div className="img">
              <img src="images/logo_foot.png" alt="footer logo" />
            </div>
            <span
              >Social Network<br />
              NFT Marketplace
            </span>
          </a>
          <ul className="menu">
            <li><a href="/">Pietà</a></li>
            <li><a href="/">Function</a></li>
            <li><a href="/">SRP</a></li>
          </ul>
        </nav>
        <nav className="ft-util">
          <ul className="ft-util-1">
            <li>Channel</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Telegram</li>
          </ul>
          <ul className="ft-util-2">
            <li>Download</li>
            <li>Ios</li>
            <li>Android</li>
          </ul>
          <ul className="ft-util-3">
            <li>White Paper</li>
            <li>Korean</li>
            <li>English</li>
            <li>China</li>
          </ul>
          <ul className="ft-util-4">
            <li>Language</li>
            <li>Korean</li>
            <li>English</li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  border-top: 1px solid #dbdbdb;
  .inner {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    padding: 58px 20px;
    margin: 0 auto;
    .ft-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 478px;
      .ft-logo {
        display: flex;
        align-items: center;
        .img {
          width: 104px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      span {
        display: inline-block;
        font-weight: 600;
        font-size: 0.25em;
        padding-left: 34px;
        margin-top: 20px;
      }
      .menu {
        li {
          margin-bottom: 12px;
          a {
            color: #000;
            font-size: 1em;
            font-weight: 800;
          }
        }
      }
    }
    .ft-util {
      display: flex;
      gap: 70px;
      ul {
        li {
          margin-bottom: 12px;
          &:first-child {
            font-weight: 600;
            font-size: 1em;
          }
        }
      }
    }
  }
` 

export default Footer;