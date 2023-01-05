import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "wynieść śmieci", done: true },
];

const hideTasksDone = false;

function App() {
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
        body={<List tasks={tasks} hideDoneTasks={hideTasksDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideTasksDone} />}
      />
    </>
  );
}

export default App;
