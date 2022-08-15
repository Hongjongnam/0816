import {
  Button,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const handleSubmit = async (e) => {
  e.preventDefault();
  //    const values = {
  //      inputAccount,
  //      image,
  //      apk,
  //      explain,
  //    };
  const result = await axios.post("http://localhost:4000/admin/upload", null);

  //    alert("등록되었습니다.");
  // location.href = "http://localhost:3000/upload";
  //    Router.push("/");
};

const AddFileModal = ({ isOpen, onClose }) => {
  return (
    <>
      <FormControl>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dapp 파일추가</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{/* <Lorem count={2} /> */}ddd</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </FormControl>
    </>
  );
};

export default AddFileModal;
