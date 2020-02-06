import React from "react";
import Styled from "styled-components";

const Hotwheel = Styled.div`
  width: 90vw;
  background-color: #fff;
  margin-bottom: 4px;

  .bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 4px;
  }
`;

const Model = ({ hotwheel }) => {
  return (
    <Hotwheel>
      {hotwheel.model}
      {hotwheel.colors.map(color => {
        color = color.toLowerCase();
        const bulletStyle = {
          backgroundColor: color,
          boxShadow: (['white', '#FFF', '#FFFFFF'].includes(color))? '1px 1px 4px 0px rgba(0,0,0,0.75)': 'none'
        }
        return (
          <span
            style={bulletStyle}
            className="bullet"
          ></span>
        );
      })}
    </Hotwheel>
  );
};

export default Model;
