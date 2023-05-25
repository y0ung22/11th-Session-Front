<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
import styled from "styled-components";

const Modal = (props) => {
  const { setModal } = props;

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
<<<<<<< HEAD
      <ModalWrapper>
        <button onClick={deleteModal}>모달 삭제</button>
      </ModalWrapper>
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100px,
  height: 100px,
  display: flex,
  background-color:orange,
  margin-top: 30px,
  justify-content: center,
  align-items: center,
=======
      <Wrapper>
        <Button onClick={deleteModal}>모달 삭제</Button>
      </Wrapper>
    </>
  );
};
export default Modal;

const Wrapper = styled.div`
  display: inline-block;
  color: purple;
  background-color: pink;
  font-size: 1em;
  font-weight: bolder;
  margin: 1em;
  padding: 1em;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: yellow;
  color: blue;
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
`;
