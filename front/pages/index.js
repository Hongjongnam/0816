import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import useAccount from "../hooks/useAccount";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import AddFileModal from "../components/AddFileModal";
import axios from "axios";

const index = () => {
  const { account } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!account) {
      console.log(account);
    }
  }, [account]);

  return (
    <>
      <Flex
        bg="red.900"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {/* <Button colorScheme="blue">DAPP 파일추가</Button> */}

        {account ? (
          <>
            {/* <Flex>
              <Link href="http://localhost:3000/upload"> */}
            <Button onClick={onOpen}>DAPP 파일추가 / modal</Button>
            <br />
            <Link href="http://localhost:3000/upload">
              <Button>DAPP 파일추가 / 링크이동</Button>
            </Link>
            {/* </Link>
            </Flex> */}
          </>
        ) : (
          "메타마스크 연결 후 DAPP 파일추가 신청하세요"
        )}
      </Flex>
      <AddFileModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default index;
