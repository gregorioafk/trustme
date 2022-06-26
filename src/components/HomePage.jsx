import React from "react";
import { FormProfile } from "./Form/FormProfile";
import * as web3 from "web3";

// eslint-disable-next-line no-unused-vars
export const HomePage = ({ accountAddress, ethereum }) => {
  console.log(web3);
  return (
    <div className="flex flex-col justify-center items-center 56">
      <div className="flex flex-col mt-16">
        <h3 className="text-gray-300 font-bold">Crea tu canal</h3>
      </div>
      <FormProfile />
    </div>
  );
};
