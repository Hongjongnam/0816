import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useAccount from "../../hooks/useAccount";

const index = () => {
  const { account } = useAccount("");
  //   const [values, setValues] = useState();
  const [inputAccount, setInputAccount] = useState("");
  const [image, setImage] = useState("");
  const [apk, setApk] = useState("");
  const [explain, setExplain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      inputAccount,
      image,
      apk,
      explain,
    };
    const result = axios.post("http://localhost:4000/upload", values);
  };

  //   const handleChange = (e) => {
  // //     const { name, value } = e.target;
  // //     setValues({ ...values, [name]: value });
  // //   };

  useEffect(() => {
    // const { account } = useAccount();
    setInputAccount(account);
  }, [account]);

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>파일 등록</h1>
        <label>계정</label>
        <input
          type="text"
          name="account"
          onChange={(e) => {
            setInputAccount(e.target.value);
          }}
          value={inputAccount}
        />
        <br />
        <label>이미지</label>
        <input
          type="text"
          name="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        />

        <br />
        <label>파일</label>
        <input
          type="text"
          name="apk"
          onChange={(e) => {
            setApk(e.target.value);
          }}
          value={apk}
        />
        <br />
        <label>설명</label>
        <input
          type="text"
          name="explain"
          onChange={(e) => {
            setExplain(e.target.value);
          }}
          value={explain}
        />
        <br />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
};

export default index;
