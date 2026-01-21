import React, { useState } from "react";

const Prop3 = ({ func }) => {
  const [input, setInput] = useState("");
  console.log("prop3 called");
  return (
    <div>
      {/* <p>{data.name}</p> */}
      <input
        type="text"
        placeholder="enter new name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => func(input)}>update parent name</button>
    </div>
  );
};

export default Prop3;
