import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { BiMath } from "react-icons/bi";
export const MathNode = ({ id, data }) => {
  const [expression, setExpression] = useState('');
  
  const handleExpressionChange = (e) => {
    setExpression(e.target.value);
  };

  return (
    <BaseNode id={id} className="input-node">
      {/* Title Section */}
      <div className="title-container">
        <div className="title">
          <BiMath  className="icon" />
          Math Node</div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* Expression Field */}
      <div className="name-field">
        <label className="label">
          Expr:
          <input
            type="text"
            value={expression}
            onChange={handleExpressionChange}
            className="name-input"
            placeholder="Enter Expression: "
          />
        </label>

      </div>
    
      {/* Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in1`}
        style={{ top: "30%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in2`}
        style={{ top: "70%" }}
      />
      <Handle type="source" position={Position.Right} id={`${id}-result`} />
    </BaseNode>
  );
};
