import "./App.css";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";

function App() {
  return (
    <>
      <Navbar title="Texteditor" about="About us" />
      <div className="container">
        <Forms newtitle="Enter text to edit" />
      </div>
    </>
  );
}

export default App;
