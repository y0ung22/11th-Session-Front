import styled from "styled-components";

const Modal = (props) => {
  const { setModal } = props;

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <>
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
`;
