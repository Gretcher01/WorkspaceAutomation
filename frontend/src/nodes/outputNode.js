import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { MdOutlineOutput } from "react-icons/md";


export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState('');


  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
   
    <BaseNode id={id} className="input-node">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />

      {/* Title Section */}
      <div className="title-container">
        <div className="title">
        <MdOutlineOutput  className="icon" />
          Output
        </div>
        <p className="description">
          Pass data of different types into your workflow.
        </p>
      </div>

      {/* Name Field */}
      <div className="name-field">
        
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="name-input"
          />
        </div>
     
      {/* Type Dropdown */}
      <div className="dropdown-container">
      <label className="label">Type:</label>
                <label className="dropdown-label">Dropdown</label>
            </div>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="dropdown-select"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
          
          <div className="dropdown-container">
      <label className="label">Output:</label>
                <label className="dropdown-label">Text</label>
            </div>
      <input
        type="text"
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        className="dropdown-select"
        placeholder="Enter text"
      />


        
      
    </BaseNode>
  );
};
