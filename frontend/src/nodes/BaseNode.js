// BaseNode.js
import React from 'react';

export const BaseNode = ({ id, style, children }) => {
  const defaultStyle = {
    width: 220,
    height: "auto",
    border: "2px solid #C4B5FD", 
    padding: "15px", 
    borderRadius: "12px", 
    boxSizing: "border-box",
    backgroundColor: "white", 
    fontFamily: "'Roboto', sans-serif", 
    color: "#4B5563",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", 
    textAlign: "center", 
    ...style, 
  };

  return (
    <div id={id} style={defaultStyle}>
      {children}
    </div>
  );
};
