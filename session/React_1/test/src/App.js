import React, { useState } from "react";
import Name from "./components/Name";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
<<<<<<< HEAD
      <Name />
=======
      <Name name="아기사자" nth="11" isFE="true" />
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
      <Counter />
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
