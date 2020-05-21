import React from "react";
import "./ToDo_List.css";
import { useState } from "react";

function Point(props) {
  let elementClassPoint = "point";
  if (props.active) {
    elementClassPoint += " point--active";
  }

  const [editor, setEditor] = useState(false);
  const [check, setСheck] = useState(0);
  const [text, setText] = useState(props.text);
  if (check) {
    elementClassPoint += " point--check-text";
  }

  let makeCheckTrue = check === true;
  function donePoint() {
    setСheck(true);
  }
  function notDone() {
    setСheck(false);
  }
  function actionEnableEditor() {
    setEditor(true);
  }
  function actionDisableEditor() {
    setEditor(false);
  }
  function actionSaveEditor(event) {
    setText(event.target.value);
  }

  return (
    <>
      {!editor && (
        <>
          <div className={elementClassPoint} onClick={props.click}>
            <Check click={donePoint} check={makeCheckTrue} dblclick={notDone} />{" "}
            {text}
            <Icon type="delete" />
            <Icon type="edit" action={actionEnableEditor} />
          </div>
        </>
      )}
      {editor && (
        <div className={elementClassPoint} onClick={props.click}>
          <input
            className="inputInPoint"
            type="text"
            onChange={actionSaveEditor}
            value={text}
          />
          <Icon type="exitEditor" action={actionDisableEditor} />
        </div>
      )}
    </>
  );
}

function Check(props) {
  let elementClass = "far fa-circle check_IconOFF";
  if (props.check) {
    elementClass = "fas fa-check-circle check_IconON  ";
  }

  return (
    <>
      <i
        className={elementClass}
        data-title="double click to deactivate"
        onClick={props.click}
        onDoubleClick={props.dblclick}
      ></i>
    </>
  );
}

function Group(props) {
  const [points, setPoints] = useState(props.points);

  function AddNewPoint() {
    let newPoints = [];
    count++;
    let o = {
      text: ["New point №" + count],
      id: count,
    };
    newPoints = points.map((e) => {
      return e;
    });
    newPoints.push(o);
    setPoints(newPoints);
  }

  let list = points.map((e) => {
    return <Point text={e.text} key={e.id} />;
  });
  return (
    <>
      <button onClick={AddNewPoint}>Add new point</button>
      {list}
      {}
    </>
  );
}

// Кнопки  ====================================================
function AddButton(props) {
  if (props.type === "list")
    return (
      <div className="AddListButton" onClick={props.action}>
        <i className="fas fa-plus-circle "></i>
      </div>
    );

  if (props.type === "point")
    return (
      <div className="AddPointButton" onClick={props.action}>
        <i className="fas fa-plus "></i>
      </div>
    );
}
// Кнопки  ====================================================

// ІКОНКИ  ====================================================
function Icon(props) {
  if (props.type === "exitEditor")
    return (
      <span className="IconEdit" onClick={props.action}>
        <i className="fas fa-check-square"></i>
      </span>
    );
  if (props.type === "delete")
    return (
      <i className="fas fa-trash-alt IconDelete" onClick={props.action}></i>
    );
  if (props.type === "edit")
    return (
      <span className="IconEdit" onClick={props.action}>
        <i className="fas fa-edit"></i>
      </span>
    );
}
// ІКОНКИ  ====================================================

// Мої СПИСКИ ==================================================

function MakerList(props) {
  return (
    <div className="makerList" onClick={props.click}>
      {props.text}
    </div>
  );
}

let my_lists = [
  { text: "Importance" },
  { text: "Shoping list" },
  { text: "Іdeas" },
  { text: "Planned" },
  { text: "To do" },
];
function List(props) {
  let renderList = my_lists.map((element, index) => (
    <MakerList text={element.text} key={index} />
  ));
  return <>{renderList}</>;
}

function Title() {
  let varibleWord = "Хочу показувати той список, на який нажав";
  // let NewWord = <MakerList text/>
  return <div className="container__rightSide__head__title">{varibleWord}</div>;
}

function My_ToDo(props) {
  return (
    <div className="container">
      <div className="container__leftSide">
        <AddButton type="list" />
        <List lists={my_lists} />
      </div>
      <div className="container__rightSide">
        <div className="container__rightSide__head">
          <Title />
          <AddButton type="point" />
        </div>
        <div className="container__rightSide__content">
          <Group points={my_points} />
        </div>
      </div>
    </div>
  );
}
let count = 3;
let my_points = [
  {
    text: "test",
    id: 1,
  },
];

export function ToDo() {
  return <My_ToDo />;
}
