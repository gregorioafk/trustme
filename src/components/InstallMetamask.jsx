import React from "react";
import styled from "styled-components";

const Button = styled.button`
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

export const InstallMetamsk = () => (
  <div className="color text-zinc-400 flex flex-col justify-center items-center h-screen ">
    Still not connect to metamask
    <h1>Install Metamask</h1>
    <p>Please install Metamask to use this app.</p>
    <Button
      cta
      onClick={() =>
        window.open(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
          "_blank",
        )
      }>
      Install MetaMask now!
    </Button>
  </div>
);
