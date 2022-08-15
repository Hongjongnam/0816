import Link from "next/link";
import { Box, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [datas, setDatas] = useState([]);
  // const from = useAccount();

  const showInfo = async () => {
    const response = await axios.post("http://localhost:4000/admin/", null);

    setDatas(response.data.result.length);
  };

  useEffect(() => {
    console.log(datas);
    showInfo();
  }, [datas]);

  return (
    <Flex
      bg="yellow.200"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Link href="/admin/validpage">
        <Button size="sm" variant="ghost">
          파일 검토하기
          <br />
          신청 갯수 : {datas}
        </Button>
      </Link>
    </Flex>
  );
};

export default index;
