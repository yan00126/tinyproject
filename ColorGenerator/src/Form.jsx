import React from "react";
import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {};
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          id=""
        />
      </form>
      <button className="btn" type="submit" style={{ background: color }}>
        submit
      </button>
    </section>
  );
};

export default Form;
