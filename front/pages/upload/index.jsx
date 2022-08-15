import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useAccount from "../../hooks/useAccount";
import Router from "next/router";
// import {
//   Box,
//   Input,
//   FormControl,
//   FormLabel,
//   Text,
//   Flex,
//   FormHelperText,
//   Button,
//   Formik,
// } from "@chakra-ui/react";

const index = () => {
  const { account } = useAccount("");
  const [inputAccount, setInputAccount] = useState("");
  const [image, setImage] = useState("");
  const [apk, setApk] = useState("");
  const [explain, setExplain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      inputAccount,
      image,
      apk,
      explain,
    };
    const result = await axios.post(
      "http://localhost:4000/admin/upload",
      values
    );

    alert("등록되었습니다.");
    // location.href = "http://localhost:3000/upload";
    Router.push("/");
  };

  useEffect(() => {
    setInputAccount(account);
  }, [account]);

  if (inputAccount == null) return;

  return (
    // <Flex
    //   minH="100vh"
    //   justifyContent="center"
    //   alignItems="center"
    //   direction="column"
    // >
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h1>파일 등록</h1>
      <br />
      <br />
      <label>계정</label>
      {/* <FormHelperText>We'll never share your account.</FormHelperText> */}
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
      <label>파일</label>
      <input
        type="text"
        name="apk"
        onChange={(e) => {
          setApk(e.target.value);
        }}
        value={apk}
      />
      <label>설명</label>
      <input
        type="text"
        name="explain"
        onChange={(e) => {
          setExplain(e.target.value);
        }}
        value={explain}
      />
      <button type="submit" value="제출" onSubmit={handleSubmit}>
        제출
      </button>
    </form>
    // </Flex>
  );
};

export default index;
