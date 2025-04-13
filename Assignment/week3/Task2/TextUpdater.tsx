import React, { useState } from "react";

const TextUpdater: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
