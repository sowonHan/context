import { createContext, useState } from "react";

// { color: "black" } 라는 데이터를 주고받게 되는 것
// const ColorContext = createContext({ color: "black" });

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// Consumer를 ColorConsumer로 이름 바꿔주는 것
// ColorContext.Consumer를 ColorConsumer라는 이름으로 내보낸다는 뜻
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
