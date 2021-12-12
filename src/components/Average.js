import { useMemo } from "react";
import { useState } from "react/cjs/react.development";
import { useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("계산중...");

  if (numbers.length === 0) {
    //빈 리스트일때
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]); //배열state
  const [number, setNumber] = useState(""); //numberstate
  const inputE1 = useRef(null);

  const onChange = useCallback((e) => {
    console.log("onChange함수실행");
    setNumber(e.target.value); //number state 변화
  }, []);

  const onInsert = useCallback(
    (e) => {
      console.log("onInsert함수 만들어짐");
      const nextList = list.concat(parseInt(number)); //불변성
      setList(nextList);
      setNumber("");
      inputE1.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputE1}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
