import react from "react";
import reactDom from "react-dom";
import App from "./App";

// function createNote(notes) {
//   return (
//     <Note key={notes.key} title={notes.title} content={notes.content}></Note>
//   );
// }
reactDom.render(<App></App>, document.getElementById("root"));
