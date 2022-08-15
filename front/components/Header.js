import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import useAccount from "../hooks/useAccount";

const Header = () => {
  const { account } = useAccount();
  return (
    <Flex
      position="fixed"
      w="full"
      bg="white"
      justifyContent="space-between"
      px="12"
      py="2"
      board-bottom="1px solid"
    >
      <Box>
        <Link href="/">DappStore</Link>
      </Box>
      <Box>
        <Link href="/defi">
          <Button size="sm" variant="ghost">
            DeFi
          </Button>
        </Link>
        <Link href="/nft">
          <Button size="sm" variant="ghost">
            NFT
          </Button>
        </Link>
        <Link href="/games">
          <Button size="sm" variant="ghost">
            Games
          </Button>
        </Link>
        <Link href="/exchange">
          <Button size="sm" variant="ghost">
            Exchange
          </Button>
        </Link>
      </Box>
      <Box>
        {account ? (
          <>
            <Link href="/user/mypage">
              <Button size="sm" variant="ghost">
                mypage
              </Button>
            </Link>
          </>
        ) : (
          <Link href="/user/login">
            <Button size="sm" variant="ghost">
              Login
            </Button>
          </Link>
        )}
        <Link href="/admin">
          <Button size="sm" variant="ghost">
            admin
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
