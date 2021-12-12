import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  return (
    <div>
      <div>
        <input value={name} name="name" onChange={onChange}></input>
        <input value={nickName} name="nickName" onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
