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
    </FuncSection>
  );
};

const FuncSection = styled.div`
  width: 100%;
`;

export default Func;
