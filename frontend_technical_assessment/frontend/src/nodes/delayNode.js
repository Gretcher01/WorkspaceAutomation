import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { IoIosTimer } from "react-icons/io";


export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  return (
    <BaseNode id={id} className="input-node">
      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <IoIosTimer   className="icon" />
        Delay Node</div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>
      
      {/* Delay Field */}
      <div className="name-field">
        <label className="label">
          Delay (ms):
          <input
            type="number"
            value={delay}
            onChange={handleDelayChange}
            className="name-input"
          />
        </label>
      </div>
      
      {/* Handles */}
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};
