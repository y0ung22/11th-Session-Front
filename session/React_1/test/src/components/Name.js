import React from "react";

<<<<<<< HEAD
const Name = () => {
  return <div>안녕하세요 저는 아기사자 김가영입니다.</div>;
};

=======
const Name = (props) => {
  const { name, nth, isFE } = props;
  const style = {
    backgroundColor: "black",
    color: "orange",
  };
  return (
    <>
      {isFE ? (
        <div style={style}>
          {nth}기 프론트엔드 {name}입니다.
        </div>
      ) : null}
    </>
  );
};
Name.defaultProps = {
  name: "이채원",
};
>>>>>>> 2a8e3037272819fde7b5793e9975e994412c2bcb
export default Name;
