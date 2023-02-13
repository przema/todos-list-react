import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "wynieść śmieci", done: true },
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <List tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />
        }
      />
    </>
  );
}

export default App;
