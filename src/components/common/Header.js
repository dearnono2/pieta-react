import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const links = [
    {
      linkTo: "Pieta",
      title: "Pietà",
    },
    {
      linkTo: "Function",
      title: "Function",
    },
    {
      linkTo: "SubSrp",
      title: "SRP",
    },
  ];

  return (
    <Wrapper>
    <div className="container">
      <h1>
        <Link to="/">
          <img src={"./images/logo_black.png"} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          {links.map((v, i) => (
            <li key={i}>
              <Link to={v.linkTo}>{v.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="util">
        <ul>
          <li>White Paper</li>
          <li>Channel</li>
          <li>Language</li>
        </ul>
      </div>
    </div>
  </Wrapper>
  )

};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* height: 60px; */
  padding: 20px 50px;
  background-color: rgba(255, 255, 255, 0.65);
  z-index: 20;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      ul {
        display: flex;
        gap: 31px;
        li {
          a {
            color: #24242e;
            font-size: 1.5em;
            font-weight: 600;
          }
        }
      }
    }
    .util {
      ul {
        display: flex;
        gap: 24px;
        a {
          color: black;
          font-size: 1.1em;
        }
      }
    }
  }
`

export default Header;
