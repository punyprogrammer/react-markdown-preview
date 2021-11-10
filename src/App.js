import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import defaultMarkDown  from "./mark";

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkDown);
  const onChangeHandler = (e) => {
    setMarkdown(e.target.value);
    console.log(typeof e.target.value);
  };
  return (
    <main>
      <h1 className="app-heading"> MarkDown Preview</h1>
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
