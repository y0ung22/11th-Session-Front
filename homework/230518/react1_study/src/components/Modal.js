import styled from "styled-components";

const Modal = (props) => {
  //구조 분해하기
  const { name, track, setModal } = props;
  //모달 닫기 함수
  const deleteModal = () => {
    setModal(false);
  };
  return (
    <Wrapper>
      <Container>
        <ModalTop />
        <ModalTitle>
          <p>{track}</p>
        </ModalTitle>
        <ModalContents>
          <p>{name}님 환영합니다</p>
        </ModalContents>
        <DeleteModalBtn onClick={deleteModal}>닫기</DeleteModalBtn>
      </Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  width: 35.3%;
  aspect-ratio: 2.1/1;
  min-width: 400px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 24px;
  background-color: #f5f5f5;
  button {
    min-width: 100px;
    margin-top: 6%;

    border-radius: 24.5px;
    border: none;
    color: white;
    background-color: #81a7d3;
  }
`;
const ModalTop = styled.div`
  width: 100%;
  height: 15%;

  border-radius: 24px 24px 0 0;
  background-color: #bddaef;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ModalTitle = styled.div`
  margin-top: 5%;
  p {
    color: #03a1fc;
    font-weight: 700;
    font-size: 18px;
    opacity: 0.8;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 15px;
  }
`;
const ModalContents = styled.div`
  p {
    font-weight: 600;
    font-size: 25px;
    color: #333333;
    opacity: 0.8;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 20px;
  }
`;
const DeleteModalBtn = styled.button`
  margin: 3%;
  width: 25.8%;
  font-size: 20px;
  aspect-ratio: 3.5/1;
`;
