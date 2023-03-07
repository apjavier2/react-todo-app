import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn react", "Learn TS"]} />
    </div>
  );
}

export default App;
