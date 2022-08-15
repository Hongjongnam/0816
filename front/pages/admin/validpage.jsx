import React, { useEffect, useState } from "react";
import axios from "axios";
import useAccount from "../../hooks/useAccount";
import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// import { Contract } from "web3-eth-Contract";

const validpage = () => {
  const [datas, setDatas] = useState([]);
  // const from = useAccount();

  const showInfo = async () => {
    const response = await axios.post(
      "http://localhost:4000/admin/validpage",
      null
    );
    setDatas(response.data.result);
  };

  // if (datas.length !== 0) return;
  console.log(datas);

  const view = () => {
    return (
      <div>
        {datas.map((v, k) => {
          return (
            <ul key={k}>
              <li>{v.idx}</li>
              <li>{v.account}</li>
              <li>{v.img}</li>
              <li>{v.files}</li>
              <li>{v.explains}</li>
              <button onClick={regist}>등록</button>
              <button
                onClick={() => {
                  cancel(v.idx);
                }}
              >
                취소
              </button>
              <br />
              <br />
            </ul>
          );
        })}
      </div>
    );
  };

  const regist = async () => {
    const response = await axios.post("http://localhost:4000/admin/regist");
    console.log("back에서 응답받은 데이터값", response.data);

    // metamask에 던지는 코드
    await web3.eth.sendTransaction(response.data);
  };

  const cancel = async (idx) => {
    await axios.post("http://localhost:4000/admin/cancel", {
      idx,
    });
  };

  useEffect(() => {
    // console.log(datas);
    showInfo();
  }, [datas]);

  return <div>{view()}</div>;
};

export default validpage;
