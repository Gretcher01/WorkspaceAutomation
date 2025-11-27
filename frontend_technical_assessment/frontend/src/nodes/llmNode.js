import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { GiArtificialIntelligence } from "react-icons/gi";


export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} className="input-node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: "33.33%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: "66.67%" }}
      />

      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <GiArtificialIntelligence     className="icon" />
        LLM</div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* Content Section */}
      <div className="name-field">
        <span>This is a LLM.</span>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};
