import "./App.css";
import Todos from "./components/Todos";
import AddToDo from "./components/addToDo";

function App() {
  return (
    <div className="App">
      <Todos />
      <AddToDo />
    </div>
  );
}

export default App;
