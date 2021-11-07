import React, { useState } from "react";
import ReactMarkdown from "react-markdown";


function App() {
  const [markdown, setMarkdown] = useState("This would be *italicized* text and this would be **bold** text, This would be *italicized* text and this would be **bold** text, This would be *italicized* text and this would be **bold** text");
  const onChangeHandler=(e)=>{
  setMarkdown(e.target.value)
  console.log(typeof(e.target.value))
  }
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={onChangeHandler}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
