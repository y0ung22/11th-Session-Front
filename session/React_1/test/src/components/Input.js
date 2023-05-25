import React, { useState } from "react";

const Input = () => {
<<<<<<< HEAD
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
=======
  const [inputs, setInputs] = useState({
    name: "",
    nth: "",
  });
  const { name, nth } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nth: "",
    });
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
  };
  return (
    <div>
      <hr />
<<<<<<< HEAD
      <input onChange={onChange} value={text}></input>
      <button onClick={onReset}>초기화</button>
      <h2>값: {text}</h2>
    </div>
  );
};

=======
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nth" placeholder="기수" onChange={onChange} value={nth} />
      <button onClick={onReset}>초기화</button>
      <h2>
        값:{name} ({nth})
      </h2>
    </div>
  );
};
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
export default Input;
