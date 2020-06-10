import React from "react";
import "./main.css";

const ScoreItem = ({ item, adjust, remove }) => {
  const [active, setActive] = React.useState(false);
  const [score, setScore] = React.useState(item.score);

  const onClick = (item) => {
    setActive(!active);
  };
  const increment = (id) => {
    adjust(id, 1);
  };
  // const remove = () => {
  //   //   deletePlayer(item.id);
  //   //   // Latency compensation
  //   //   setDeleted: true ;
  // };
  // getInitialState: function () {
  //   return {
  //     score: null,
  //     deleted: false,
  //   };
  // },
  // componentWillReceiveProps: function (nextProps) {
  //   if (this.state.score) {
  //     // Reset latency compensation
  //     this.setState({ score: null });
  //   }
  // },
  var className = item.deleted ? "hidden" : active ? "active" : "";
  console.log("item", item);
  return (
    <li onClick={onClick} className={className}>
      <span className="name">{item.name}</span>
      <span className="increment control" onClick={() => increment(item.id)}>
        <span>Increment Score</span>
      </span>
      <span className="delete control" onClick={() => remove(item.id)}>
        ×
      </span>
      <span className="score">{item.score}</span>
    </li>
  );
};

export default ScoreItem;
