import TreeView from "./Components/TreeView";
import menus from "./Components/Data";
import "./App.css";

function App() {
  return (
    <>
      <TreeView menus={menus} />
    </>
  );
}

export default App;
