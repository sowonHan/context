import React from "react";
// import { ColorConsumer } from "../contexts/color";
import { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// function SelectColors(props) {
//   return (
//     <div>
//       <h2>색상 선택</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {/* map이 반복 돌려서 컬러별로 div를 생성 */}
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 // 왼쪽 클릭할 때
//                 onClick={() => actions.setColor(color)}
//                 // 오른쪽 클릭할 때
//                 onContextMenu={(e) => {
//                   // 우클릭했을 때 메뉴 안 나오게 하려고
//                   e.preventDefault();

//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// }

// export default SelectColors;

// 클래스형에서 콘텍스트 쓰는 방법
class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상 선택</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
