import { useEffect, useState } from "react";

const useAccount = () => {
  const [account, setAccount] = useState("");

  const getAccount = async () => {
    console.log(window.ethereum);
    try {
      if (!window.ethereum) throw new Error("Error");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && Array.isArray(accounts)) setAccount(accounts[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);
  console.log(account);
  return { account };
};

export default useAccount;
