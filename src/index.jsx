// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

class Pure extends React.PureComponent {
  render() {
    return this.props.foo ? <Foo /> : <Bar />;
  }
}

function Foo() {
  return <Dnd />;
}

function Bar() {
  return <Dnd />;
}

function Dnd() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndItem />
    </DndProvider>
  );
}

function DndItem() {
  const [, drag] = useDrag(() => ({
    type: "test",
    canDrag: () => true,
  }));
  const [, drop] = useDrop(() => ({
    accept: "test",
    canDrop: () => true,
  }));
  // drag(drop(null));
  return <button ref={(ref) => drag(drop(ref))}>OK1</button>;
}

const root = document.getElementById("root");
ReactDOM.render(<Pure foo={1} />, root);
ReactDOM.render(<Pure foo={0} />, root)
ReactDOM.render(
  <>
    <Pure foo={0} />
    <Pure foo={2} />
  </>,
  root
);
