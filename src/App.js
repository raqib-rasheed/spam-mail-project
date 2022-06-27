import "./App.css";
import "antd/dist/antd.css";
import TableComponent from "./components/Table";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <div className="App">
      <TableHeader />
      <TableComponent />
    </div>
  );
}

export default App;
