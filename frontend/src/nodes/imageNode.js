import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { CiImageOn } from "react-icons/ci";


export const ImageNode = ({ id, data }) => {
  const [imageUrl, setImageUrl] = useState(
    data?.imageUrl || "https://via.placeholder.com/150"
  );

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <BaseNode id={id} className="input-node">
      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <CiImageOn  className="icon" />
          Image Node</div>
          <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* URL Field */}
      <div className="name-field">
        <label className="label">
          URL:
          <input
            type="text"
            value={imageUrl}
            onChange={handleUrlChange}
            className="name-input"
          />
        </label>
      </div>

      {/* Image Preview */}
      <div className="image-container">
        <img src={imageUrl} alt="Preview" className="image-preview" />
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </BaseNode>
  );
};
