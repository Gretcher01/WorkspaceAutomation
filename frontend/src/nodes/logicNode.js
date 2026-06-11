import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { RxValueNone } from "react-icons/rx";


export const LogicNode = ({ id, data }) => {
  const [logicValue, setLogicValue] = useState(data?.logicValue ?? false);

  const handleToggle = () => {
    setLogicValue((prev) => !prev);
  };

  return (
    <BaseNode id={id} className="input-node">
      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <RxValueNone    className="icon" />
        Logic Node</div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* Logic Toggle Field */}
      <div className="name-field">
        <label className="label">
          Value:
          <input
            type="checkbox"
            checked={logicValue}
            onChange={handleToggle}
          />
        </label>
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};
