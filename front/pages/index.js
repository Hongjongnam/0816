import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import useAccount from "../hooks/useAccount";

const index = () => {
  const { account } = useAccount();
  console.log("hi", account);

  useEffect(() => {
    if (!account) {
      console.log(account);
    }
  }, [account]);

  return (
    <div>
      <div>메인페이지</div>
      <br />
      <br />
      {account ? (
        <Link href="http://localhost:3000/upload">Upload</Link>
      ) : (
        "Connect"
      )}
    </div>
  );
};

export default index;
