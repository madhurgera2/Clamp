import logo from "./logo.svg";
import "./App.css";
import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Right from "./components/Right/Right";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap:"10px"
      }}
    >
      <Left />
      <Center />
      <Right />
    </div>
  );
}

export default App;
