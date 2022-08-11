import Link from "next/link";
import { Box, Button, Flex } from "@chakra-ui/react";

const index = () => {
  return (
    <Link href="/admin/validpage">
      <Button size="sm" variant="ghost">
        파일 검토하기
      </Button>
    </Link>
  );
};

export default index;
