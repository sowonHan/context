import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    // value는 { color: "black" }가 되는 것
    // <ColorContext.Provider value={{ color: "red" }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>

    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
