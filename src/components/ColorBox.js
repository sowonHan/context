import React, { useContext } from "react";
import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

function ColorBox() {
  const { state } = useContext(ColorContext);

  return (
    // consumer 단어 의미 그대로 ColorContext를 소비한다는 뜻
    // value는 { color: "black" }가 되는 것
    // <ColorContext.Consumer>
    //   {(value) => (
    //     <div
    //       style={{
    //         width: "64px",
    //         height: "64px",
    //         background: value.color,
    //       }}
    //     />
    //   )}
    // </ColorContext.Consumer>

    // <ColorConsumer>
    //   {(value) => (
    //     <>
    //       <div
    //         style={{
    //           width: "64px",
    //           height: "64px",
    //           background: value.state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: "32px",
    //           height: "32px",
    //           background: value.state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    // </ColorConsumer>

    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
}

export default ColorBox;
