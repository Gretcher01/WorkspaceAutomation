// /frontend/src/draggableNode.js
import React from 'react';
import './toolbar.css'; 


import { IoIosTimer } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { MdInput } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RxValueNone } from "react-icons/rx";
import { BiMath } from "react-icons/bi";
import { MdOutlineOutput } from "react-icons/md";
import { HiSwitchHorizontal } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai"; 


const iconMapping = {
  customInput: MdInput,
  llm: GiArtificialIntelligence,
  customOutput: MdOutlineOutput,
  text: AiOutlineFileText,
  mathNode: BiMath,
  logicNode: RxValueNone,
  imageNode: CiImageOn,
  delayNode: IoIosTimer,
  switchNode: HiSwitchHorizontal
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  
  const IconComponent = iconMapping[type];

  return (
    <div
      className={`toolbar-btn ${type}`}  
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    >
      {IconComponent && <IconComponent className="toolbar-icon" />}
      <span>{label}</span>
    </div>
  );
};
