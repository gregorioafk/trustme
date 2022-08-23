import React from "react";
import styled from "styled-components";

// const WrapperHomeDW = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   justify-content: center;
//   height: 100vh;
// `;
const ButtonConnect = styled.button`
  background-color: #f7f7f7;
  border: 1px solid #f7f7f7;
  border-radius: 4px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  width: 200px;
  margin-top: 20px;

  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

export const HomeDisconnectWallet = ({ handleConnectWallet }) => {
  return (
    <div className="color text-zinc-400 flex flex-col justify-center items-center h-screen ">
      Still not connect to metamask
      <ButtonConnect onClick={handleConnectWallet}>
        <h1>Connect wallet</h1>
      </ButtonConnect>
    </div>
  );
};
