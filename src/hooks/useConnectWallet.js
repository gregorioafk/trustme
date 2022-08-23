import { useState, useCallback } from "react";

export const useConnectWallet = () => {
  const { ethereum } = window;

  const [loading, setLoading] = useState(false);
  const [accountAddress, setAccountAddres] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [accounts, setAccounts] = useState([]);

  const addAccountDb = (account) => {
    fetch("http://localhost:4000/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ account }),
    }).then((res) => res.json());
  };

  const getAccounts = async (address) => {
    const adress = await fetch("http://localhost:4000/accounts").then((res) =>
      res.json().then((data) => {
        return data.some((a) => a.account === address);
      }),
    );

    !adress && addAccountDb(address);
  };

  const handleConnectWallet = useCallback(async () => {
    setLoading(true);
    ethereum.request({ method: "eth_requestAccounts" }).then((account) => {
      setAccountAddres(account[0]);

      getAccounts(account[0]);

      setLoading(false);
    });
  }, [ethereum]);

  return { loading, accountAddress, handleConnectWallet };
};
