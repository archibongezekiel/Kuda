import { useState } from "react";

const lists = [
  { id: 1, items: "mango" },
  { id: 2, items: "apple" },
  { id: 3, items: "orange" },
];
const prods = lists.map((c) => (
  <li>
    {c.id} {c.items}
  </li>
));
const T = () => <p>True</p>;
const F = () => <p>False</p>;
const Props = (p) => <h5>{p.brand}</h5>;
const text = "ezekiel";
function Button() {
  const [state, counts] = useState(0);
  const click = () => counts("dd");
  return <button onClick={click}>Alert {state}</button>;
}

{
  /* */
}

function Side(p) {
  const [change, change2] = useState("password");
  const changeClick = () => {
    change2("text");
  };

  {
    /* */
  }
  return (
    <>
      <Props brand={text} />
      <ul>{prods}</ul>
      <Button />
      <button onClick={changeClick}>{change}</button>
    </>
  );
}
export default Side;
