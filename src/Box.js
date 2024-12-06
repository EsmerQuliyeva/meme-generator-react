import React from "react";

const Box = (props) => {


  // function changeState() {
  //   setOnState((prevonState) => !prevonState);
  // }

  const styles = {
    backgroundColor: props.on ? "blue" : "green",
  };
  return <div className="box" style={styles} onClick={props.handleClick}></div>;
};


export default Box;
