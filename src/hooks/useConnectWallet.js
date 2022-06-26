import { useState, useCallback } from "react";

export const useConnectWallet = () => {
  const { ethereum } = window;

  const [loading, setLoading] = useState(false);
  const [accountAddress, setAccountAddres] = useState(null);

  const handleConnectWallet = useCallback(async () => {
    setLoading(true);
    ethereum.request({ method: "eth_requestAccounts" }).then((account) => {
      setAccountAddres(account[0]);
      setLoading(false);
    });
  }, [ethereum]);

  return { loading, accountAddress, handleConnectWallet };
};
