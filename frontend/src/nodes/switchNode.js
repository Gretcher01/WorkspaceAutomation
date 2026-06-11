import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { HiSwitchHorizontal } from "react-icons/hi";


export const SwitchNode = ({ id, data }) => {
  const [selected, setSelected] = useState(data?.selected || "option1");

  const handleSwitchChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <BaseNode id={id} className="input-node">
      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <HiSwitchHorizontal   className="icon" />
        Switch Node</div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* Switch Field */}
      <div className="name-field">
        <label className="label">
          Option:
          <select
            value={selected}
            onChange={handleSwitchChange}
            className="dropdown-select"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
      </div>

      {/* Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input1`}
        style={{ top: "40%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input2`}
        style={{ top: "60%" }}
      />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};
