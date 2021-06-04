import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

export default function LinkPreview({ link, title, showModal, setShowModal }) {
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = (e) => {
    setShowModal(false);
  };
  return (
    <Modal
      isOpen={showModal}
      style={modalStyle}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <ModalContainer>
        <div>
          <Button href={link} target="_blank">
            Open in new tab
          </Button>
          <CloseButton onClick={closeModal}>x</CloseButton>
        </div>
        <LinkViewer src={link} title={title}></LinkViewer>
      </ModalContainer>
    </Modal>
  );
}
const ModalContainer = styled.div`
  padding: 0 27px;

  & > div {
    display: flex;
    align-items: center;

    width: calc(90vw - 30px);
    max-width: 923px;
    justify-content: space-between;
    height: 61px;
    position: absolute;
    top: 0px;
    left: 15px;
  }
`;

const CloseButton = styled.button`
  background-color: inherit;
  border: none;
  font-size: 20px;
  color: white;
  font-weight: 300;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  width: 112px;

  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background-color: #1877f2;

  border-radius: 5px;
  border: none;

  @media (max-width: 611px) {
    height: 22px;
    font-size: 13px;
  }
`;

const LinkViewer = styled.iframe`
  width: calc(90vw - 30px);
  height: calc(100vh - 224px);
  max-width: 923px;
  position: absolute;
  left: 15px;
  bottom: 21px;
`;

const modalStyle = {
  overlay: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: "100",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: "63px",
    margin: "0 auto",
    width: "90vw",
    maxWidth: "966px",
    height: "calc(100vh - 141px)",
    backgroundColor: "#333",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "38px",
    fontWeight: "700",
  },
};
