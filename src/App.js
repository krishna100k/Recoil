import "./styles.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { count, counter } from "./Recoil";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Counter</h1>
        <CountValue />
        <Buttons />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          quam eu ex tincidunt tincidunt. Fusce ut lacus vel purus commodo
          aliquet vel et sapien. Nunc sollicitudin interdum nisi, a vestibulum
          justo vehicula vel. Sed euismod risus vitae congue tristique. Sed
          posuere ligula nec dolor aliquet, sit amet ullamcorper nulla
          fermentum. Aliquam nec sapien non lectus venenatis sodales et ac quam.
          Donec bibendum quam nec urna egestas, nec dictum purus ullamcorper. Ut
          dignissim, nulla ac blandit ullamcorper, velit nunc accumsan arcu, nec
          facilisis mauris elit non odio.
        </p>
      </div>
    </RecoilRoot>
  );
}

const CountValue = () => {
  const counterState = useRecoilValue(counter);
  return <p>{counterState}</p>;
};

const Buttons = () => {
  return (
    <div>
      <Increment />
      <Decrement />
    </div>
  );
};

const Increment = () => {
  const setCount = useSetRecoilState(count);

  const submitHandler = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={submitHandler}>Increment</button>;
};

const Decrement = () => {
  const setCount = useSetRecoilState(count);

  const submitHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return <button onClick={submitHandler}>Decrement</button>;
};
